import dbConnect from "../../../../../config/db";
import PostItem from "../../../../../models/PostItem";

dbConnect();

export async function GET(request: Request,{params}:{params:{id:string}}){

    const {id} = params;
    
    const post = await PostItem.findById(id).select('-__v');

    if(!post){
        return new Response(JSON.stringify({message:"post not found"}),{
            status: 404,
        })
    }

    return new Response(JSON.stringify(post),{status:200})

}