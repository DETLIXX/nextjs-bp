import User from '@models/user'
import { connectToDB } from '@utils/database'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request) { 
    console.log(res);
    await connectToDB()
    User.findById()
    return NextResponse.json(res)
}

export async function POST(request) { 
    const res = await request.json() // Request body
    console.log(res.data.id); 
    await connectToDB()
    const getUser = await User.findById(res.data.id).exec()
    return NextResponse.json(getUser)
}