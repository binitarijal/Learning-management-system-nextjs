import dbConnect from "@/database/connection";
import User from "@/database/models/user.schema";


export async function GET(){
    dbConnect()
    User.create({
        username:"Binita Rijal",
        email:"Rijalbinita01@gmail.com",
        googleId:"123",
        profileImage:"yoyoo"
    }
    )
    return Response.json({
        message: "you hit api routes"
    })
}