import dbConnect from "@/database/connection";
import User from "@/database/models/user.schema";
import NextAuth ,{Session}from "next-auth"; // import giving NextAuth function
import GoogleProvider from "next-auth/providers/google"
import { AuthOptions } from "next-auth";

//object inside this functioon
export const authOptions:AuthOptions={ 
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET as string
})
    ],
    secret:process.env.NEXTAUTH_SECRET,
    callbacks:{
       async signIn({user}:{user:{name:string,email:string,image:string}}) : Promise<boolean>{ // return bloolean
            try{
                await dbConnect() // suruma db connect ani balla aru
             const existingUser= await  User.findOne({email : user.email}) // return object if not then empty object
            if(!existingUser){
               await User.create({
                    username:user.name,
                    email:user.email,
                    profileImage: user.image,
                })
            }
            return true
            }
            
            catch(error){
                console.log(error)
                return false
            }
        },
       async session({session, user}:{session:Session,user:any}){
           const data= await User.findById(user.id) // select * from users where id=1
            session.user.role=data.role || "student"
            return session 
    }

}
}
const handler=NextAuth(authOptions)
export {handler as GET,handler as POST}