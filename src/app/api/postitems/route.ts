import dbConnect from "../../../../config/db";
import PostItem from "../../../../models/PostItem";
import { NextResponse } from "next/server";

dbConnect();

export async function GET(){
    const items = await PostItem.find().select('-__v');
    return NextResponse.json(items)

}

export async function POST(request: Request){
    const body = await request.json();

    try{

        const newPostItem =await new PostItem({...body}).save();
        return new NextResponse (JSON.stringify(newPostItem), {
            headers:  {'Content-Type': 'application/json'},
            status: 201
        });
    }catch(error){
        return new NextResponse (JSON.stringify({message: 'Failed to create post item', error}), {
            headers:  {'Content-Type': 'application/json'},
            status: 500
        });
    }
}

