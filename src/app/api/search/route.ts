import PostItem from "../../../../models/PostItem";
import dbConnect from "../../../../config/db";
import { NextResponse } from "next/server";

dbConnect();

export async function GET(req:Request){

    try {
         const { searchParams } = new URL(req.url);
     const query = searchParams.get("query");

     if (!query) return NextResponse.json([]);

     const results = await PostItem.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
      ],
    })
      .limit(10) 
      .select("title _id"); 

      return NextResponse.json(results);
    } catch (err) {
        console.error(err);
        const message = err instanceof Error ? err.message : String(err);
        return NextResponse.json({ error: message }, { status: 500 });
    }
    
     
}