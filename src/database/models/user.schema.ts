import mongoose from "mongoose"; //importing
const schema=mongoose.Schema      //schema class from mongoose

   enum Role{
    Student="student",
    Admin="admin"

   }
   
    interface IUser extends Document{
    username:string,
    profileImage:string,
    email:string,
    role:Role
   }

   const userSchema=new schema<IUser>({  //object from schema class 
    username:{   //designing column
    type : String,
    required:true
    },
    email:{
        type: String,
        required:true
    },
    profileImage:String,
        
    
    role:{
        type:String,
        enum:[Role.Student, Role.Admin],
        default:Role.Student
    }
})
//model method
const User=mongoose.models.User ||mongoose.model(" User",userSchema)// User == table ko naam , userschema=code k ma cha ta tyo
export default User