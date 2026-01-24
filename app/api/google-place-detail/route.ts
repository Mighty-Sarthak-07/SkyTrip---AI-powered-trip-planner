import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const BASE_URL = "https://places.googleapis.com/v1/places:searchText";
    const config = {
        headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": process?.env?.GOOGLE_PLACES_API_KEY,
            "X-Goog-FieldMask": ['places.photos',
                'places.displayName',
                'places.id'
            ]
        }
    }

    const { placeName } = await req.json();
    try{
    const result = await axios.post(BASE_URL, {
        textQuery: placeName,
    }, config);
    return NextResponse.json(result?.data);
    }
    catch(error){
        console.log(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}