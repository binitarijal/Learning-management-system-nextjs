// middleware
//check if user is logged in and he is admin

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Role } from "@/database/models/user.schema";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

 export const authMiddleware = async(req:NextRequest)=>{  // NextRequest is a type of request
    const session=await getServerSession(authOptions)// getServerSession is a function which takes authOptions as argument and returns session object 
    if(!session || session.user.role !== Role.Admin){
        return Response.json({
            message:"User most be logged in"
        },{status:401})
    }
return NextResponse.next()
}
//check login or not
export const checkLoginOrNot = async(req:NextRequest)=>{  // NextRequest is a type of request
    const session=await getServerSession(authOptions)// getServerSession is a function which takes authOptions as argument and returns session object 
    if(!session ){
        return Response.json({
            message:"User most be logged in"
        },{status:401})
    }
return NextResponse.next()
}