import { NextResponse } from 'next/server';
import dbConnect from '../../../../config/db';
import ContactInfo from '../../../../models/ContactInfo';

dbConnect();

export async function POST(req: Request){
    try {
        const body = await req.json();

        new ContactInfo({...body}).save();

        return NextResponse.json(
            {message:'Contact information submitted successfully.'}, 
            {status:200});

    } catch (error) {
        return NextResponse.json(
            {message:'Failed to submit contact information.', error}, 
            {status:500});
    }
}
