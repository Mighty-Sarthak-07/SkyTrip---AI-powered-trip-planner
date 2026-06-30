import aj from "@/lib/arcjet";
import { auth, currentUser } from '@clerk/nextjs/server';
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const apiKey = process.env.GEMINI_API_KEY?.trim();
    if (!apiKey) {
        return NextResponse.json({ error: "GEMINI_API_KEY is missing in environment variables." }, { status: 500 });
    }

    try {
        const { origin, destination } = await req.json();

        if (!origin || !destination) {
            return NextResponse.json({ error: "Origin and Destination are required." }, { status: 400 });
        }

        // Arcjet Protection
        const user = await currentUser();
        const userId = user?.primaryEmailAddress?.emailAddress;
        const decision = await aj.protect(req, { userId: userId ?? "", requested: 1 });
        const { has } = await auth();
        const hasPremiumAccess = has({ plan: 'monthly' });

        if (!hasPremiumAccess && decision.isDenied()) {
            return NextResponse.json({ error: "Too Many Requests. Please try again later or upgrade to Premium." }, { status: 429 });
        }

        const systemInstruction = `You are a helpful, professional, and friendly AI travel assistant for SkyTrip.
Your task is to analyze the trip's origin and destination, and return country metadata, correct standard timezone IDs (e.g., 'Asia/Kolkata', 'America/New_York', 'Europe/Paris', 'Asia/Tokyo', etc.), currency info, and customized travel tips.

IMPORTANT GUIDELINES:
1. "isDomestic": true if origin and destination are in the same country. Otherwise false.
2. "timezoneOffsetDifference": approximate hours difference between origin and destination timezone (positive if destination is ahead, negative if behind).
3. "recommendations": Provide 3-4 highly specific, helpful, and localized tips for this trip.
   - For domestic trips (e.g. Delhi to Mumbai, or San Francisco to Seattle), provide domestic travel advice (such as local transit tips, weather variations, payment options like UPI in India, local protocols, etc.).
   - For international trips, provide currency tips, timezone/jetlag advice, connectivity/eSIM recommendations, and cultural/etiquette guidelines.
4. "flag": Use the correct country flag emoji (e.g., '🇮🇳' for India, '🇯🇵' for Japan, '🇺🇸' for USA).

You MUST respond strictly in the following JSON format:
{
  "origin": {
    "country": "string",
    "currencyCode": "string (e.g. INR)",
    "currencySymbol": "string (e.g. ₹)",
    "timezone": "string (e.g. Asia/Kolkata)",
    "timezoneName": "string (e.g. IST)",
    "flag": "string"
  },
  "destination": {
    "country": "string",
    "currencyCode": "string (e.g. JPY)",
    "currencySymbol": "string (e.g. ¥)",
    "timezone": "string (e.g. Asia/Tokyo)",
    "timezoneName": "string (e.g. JST)",
    "flag": "string"
  },
  "isDomestic": boolean,
  "timezoneOffsetDifference": number,
  "recommendations": [
    {
      "category": "string (e.g. Currency & Payments, Transit, Weather, Cultural Protocol)",
      "title": "string (short title)",
      "description": "string (detailed advice)"
    }
  ]
}
`;

        const contents = [
            {
                role: "user",
                parts: [{ text: `Analyze the trip from "${origin}" to "${destination}" and generate the JSON payload.` }]
            }
        ];

        const BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

        const payload = {
            contents,
            systemInstruction: {
                parts: [{ text: systemInstruction }]
            },
            generationConfig: {
                temperature: 0.2,
                maxOutputTokens: 1000,
                responseMimeType: "application/json"
            }
        };

        const result = await axios.post(BASE_URL, payload, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        const replyText = result?.data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!replyText) {
            console.error("Empty reply from Gemini API:", JSON.stringify(result.data));
            return NextResponse.json({ error: "Invalid response from Gemini API" }, { status: 500 });
        }

        const data = JSON.parse(replyText);
        return NextResponse.json(data);
    }
    catch (error: any) {
        const errorDetails = error?.response?.data || error.message;
        console.error("Gemini Addon API Error:", JSON.stringify(errorDetails, null, 2));
        return NextResponse.json({ error: "Failed to fetch response from Gemini", details: errorDetails }, { status: 500 });
    }
}
