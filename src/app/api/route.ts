import dbConnect from "@/database/connection";
import User from "@/database/models/user.schema";


export async function GET(){
    dbConnect()

    return Response.json({
        message: "you hit api routes"
    })
}