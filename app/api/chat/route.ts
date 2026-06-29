import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const apiKey = process.env.GEMINI_API_KEY?.trim();
    if (!apiKey) {
        return NextResponse.json({ error: "GEMINI_API_KEY is missing in environment variables." }, { status: 500 });
    }

    try {
        const { messages, tripContext } = await req.json();

        if (!tripContext) {
            return NextResponse.json({ error: "Trip context is required." }, { status: 400 });
        }

        const systemInstruction = `You are a helpful, professional, and friendly AI travel assistant for SkyTrip.
You have access to the details of the user's specific generated trip. Your goal is to help the user with any questions they have about this trip.

Here is the Trip Context:
${JSON.stringify(tripContext, null, 2)}

Instructions:
1. Use the Trip Context to answer questions about hotels, pricing, itinerary, day-by-day activities, places, and coordinates.
2. If the user asks about something not directly in the context but related to the trip (such as current weather, packing recommendations, estimated total costs, best local dining options, flight tips, or general advice), use your general knowledge about the destination "${tripContext.destination || 'the destination'}" to provide highly accurate, helpful, and localized answers.
3. Be concise and keep your answers brief, highly readable, and structured. Use line breaks and bullet points where appropriate. Keep responses under 3 paragraphs if possible.
4. Keep your tone enthusiastic, professional, and helpful.
`;

        // Format messages for the Gemini API (roles: 'user' and 'model')
        const contents = messages.map((m: any) => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.content }]
        }));

        const BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

        const payload = {
            contents,
            systemInstruction: {
                parts: [{ text: systemInstruction }]
            },
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 1000
            }
        };

        const result = await axios.post(BASE_URL, payload, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        const reply = result?.data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!reply) {
            console.error("Empty reply from Gemini API:", JSON.stringify(result.data));
            return NextResponse.json({ error: "Invalid response from Gemini API" }, { status: 500 });
        }

        return NextResponse.json({ reply });
    }
    catch (error: any) {
        const errorDetails = error?.response?.data || error.message;
        console.error("Gemini Chat API Error:", JSON.stringify(errorDetails, null, 2));
        return NextResponse.json({ error: "Failed to fetch response from Gemini", details: errorDetails }, { status: 500 });
    }
}
