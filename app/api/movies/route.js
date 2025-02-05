import { NextResponse } from "next/server";
// api/movies
export async function GET(req) {
    return NextResponse.json({message:"fetching movies",success:true})
}

