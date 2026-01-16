import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from "openai";

const PROMPT = `You are an expert AI Travel Consultant. Your goal is to plan a personalized itinerary for the user.
Follow this strict conversation flow to gather necessary details. ASK ONLY ONE QUESTION AT A TIME. Wait for the user's response before proceeding to the next step.

### Conversation Steps & UI States:
1. **Starting Location**: Ask where they are starting from. (UI: 'location')
2. **Destination**: Ask for the destination city or country. (UI: 'destination')
3. **Group Size**: Ask who they are traveling with (Solo, Couple, Family, Friends). (UI: 'groupSize')
4. **Budget**: Ask for their budget preference (Low, Medium, High). (UI: 'budget')
5. **Duration**: Ask for the trip duration (number of days). (UI: 'duration')
6. **Interests**: Ask about travel style (e.g., Adventure, Relaxing, Cultural, Foodie). (UI: 'interests')
7. **Confirmation/Final**: Confirm details or ask for any special requirements. Once fully satisfied, generate the final plan. (UI: 'final')

### Guidelines:
- **Tone**: Professional, friendly, and enthusiastic.
- **One Question Only**: Never ask multiple questions in a single response.
- **Validation**: If an answer is unclear, politely ask for clarification.
- **Output Format**: You must ALWAYS return a JSON object. Do not output markdown or plain text.

### JSON Output Schema:
{
  "resp": "Your conversational response here",
  "ui": "Current UI state (location | destination | groupSize | budget | duration | interests | final)"
}`

const FINAL_PROMPT = `Generate Travel Plan with give details, give me Hotels options list with HotelName,
Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with PlaceName, Place Details, Place Image Url,
Geo Coordinates, Place address, ticket Pricing, Time travel each of the location , with each day plan with best time to visit in JSON format.
Output Schema:

{ "origin": "string",
  "destination": "string",
  "duration": "string",
  "budget": "string",
  "people_size": "string",
  "hotels": [
    {
      "hotel_name": "string",
      "hotel_address": "string",
      "price_per_night": "string",
      "hotel_image_url": "string",
      "geo_coordinates": {
        "latitude": "number",
        "longitude": "number"
      },
      "rating": "number",
      "description": "string"
    }
  ],
  "itinerary": [
    {
      "day": "number",
      "day_plan": "string",
      "best_time_to_visit_day": "string",
      "activities": [
        {
          "place_name": "string",
          "place_details": "string",
          "place_image_url": "string",
          "geo_coordinates": {
            "latitude": "number",
            "longitude": "number"
          },
          "place_address": "string",
          "ticket_pricing": "string",
          "time_travel_each_location": "string",
          "best_time_to_visit": "string"
        }
      ]
    }
  ]
}
`


export async function POST(req: NextRequest) {
    const apiKey = process.env.OPENROUTER_API_KEY || process.env.OPENROUTER_API;

    if (!apiKey) {
        return NextResponse.json({ error: "OPENROUTER_API_KEY or OPENROUTER_API is missing in environment variables." }, { status: 500 });
    }

    try {
        const { messages, isFinal } = await req.json();

        const openai = new OpenAI({
            baseURL: "https://openrouter.ai/api/v1",
            apiKey: apiKey
        });

        const completion = await openai.chat.completions.create({
            model: "openai/gpt-4o-mini",
            response_format: { type: 'json_object' },
            messages: [
                {
                    "role": "system",
                    "content": isFinal ? FINAL_PROMPT : PROMPT
                },
                ...messages
            ]
        });

        console.log(completion.choices[0].message);
        const message = completion.choices[0].message;

        return NextResponse.json(JSON.parse(message.content ?? ""));
    }
    catch (error: any) {
        console.error("Error in POST requestDetails:", error);
        return NextResponse.json({
            error: error.message || "Internal Server Error",
            details: error.response?.data || "No additional details"
        }, { status: 500 });
    }
}