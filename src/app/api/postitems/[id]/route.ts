// eslint-disable-next-line @typescript-eslint/no-explicit-any
import dbConnect from "../../../../../config/db";
import PostItem from "../../../../../models/PostItem";
import { NextRequest, NextResponse } from "next/server";


dbConnect();



export async function GET(request: NextRequest,context: any) {
  try {
    const id  = context.params.id;

    const post = await PostItem.findById(id).select("-__v");
    if (!post) {
      return new NextResponse(
        JSON.stringify({ message: "Post not found" }),
        { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return new NextResponse(
      JSON.stringify({ message: "Server error", error: message }),
      { status: 500 }
    );
  }
}


export async function PUT(request: NextRequest, context: any) {
  try {
    const id = context.params.id;
    const updatedItem = await request.json();

    const post = await PostItem.findByIdAndUpdate(id, updatedItem, { new: true });
    if (!post) {
      return new NextResponse(JSON.stringify({ message: "Post not found" }), { status: 404 });
    }

    return new NextResponse(JSON.stringify(post), {status:200})

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return new NextResponse(
      JSON.stringify({ message: "Unable to update, server error", error: message }),
      { status: 500 }
    );
  }
  
}

export async function DELETE(request: NextRequest, context: any 
) {
  try {
    const id = context.params.id;

    const post = await PostItem.findByIdAndDelete(id);
    if (!post) {
      return new NextResponse(
        JSON.stringify({ message: "Post not found" }),
        { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return new NextResponse(
      JSON.stringify({ message: "Server error", error: message }),
      { status: 500 }
    );
  }
}

