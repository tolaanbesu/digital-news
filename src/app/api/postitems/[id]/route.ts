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

export async function PUT(request: NextRequest,context:{params:{id:string}} ){
      const {id} = await context.params;
      const updatedItem = await request.json()


    try{
       const post = await PostItem.findByIdAndUpdate(id, {
        ...updatedItem
       })
       if(!post){
        return new Response(JSON.stringify({message:"post not found"}),{
            status: 404,
        })}
        return new Response(JSON.stringify(post),{
            headers:{
                "Content-Type":"Application/json"
            },
            status: 200
        })
    }catch(error){
        return new Response(JSON.stringify({message:'unabel to update,server error'}))
    }
}

export async function DELETE(request: NextRequest,context:{params:{id:string}}){
    const {id} = await context.params;

    try{
      
        const post = await PostItem.findByIdAndDelete(id)

        if(!post){
        return new Response(JSON.stringify({message:"post not found"}),{
            status: 404,
        })}
        
    return new Response(JSON.stringify(post),{
        headers:{
            'Content-Type':'application/json'
        },
        status:200,
    })
    }catch(error){
        return new Response(JSON.stringify({message:'Server Error'}),{
            status:500
        })
    }
    

}