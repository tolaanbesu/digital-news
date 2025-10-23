import dbConnect from "../../../../../config/db";
import PostItem from "../../../../../models/PostItem";
import { NextRequest } from "next/server";

dbConnect();

export async function GET(request: NextRequest,context:{params:{id:string}}){

    const {id} = await context.params;
    
    const post = await PostItem.findById(id).select('-__v');

    if(!post){
        return new Response(JSON.stringify({message:"post not found"}),{
            status: 404,
        })
    }

    return new Response(JSON.stringify(post),{status:200})

}