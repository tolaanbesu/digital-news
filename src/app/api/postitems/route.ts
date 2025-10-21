import dbConnect from "../../../../config/db";
import PostItem from "../../../../models/PostItem";

dbConnect();

export async function GET(){
    const items = await PostItem.find().select('-__v');
    return Response.json(items)

}

export async function POST(request: Request){
    const body = await request.json();

    try{

        if (Array.isArray(body)) {
         const posts = await PostItem.insertMany(body);
         return new Response(JSON.stringify(posts), {
                headers: { 'Content-Type': 'application/json' },
                status: 201
            });
            }


        const newPostItem =await new PostItem({...body}).save();
        return new Response (JSON.stringify(newPostItem), {
            headers:  {'Content-Type': 'application/json'},
            status: 201
        });
    }catch(error){
        return new Response (JSON.stringify({message: 'Failed to create post item', error}), {
            headers:  {'Content-Type': 'application/json'},
            status: 500
        });
    }
}

