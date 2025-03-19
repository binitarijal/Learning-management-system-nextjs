import mongoose from "mongoose"; //importing
const schema=mongoose.Schema      //schema class from mongoose

const userSchema=new schema({  //object from schema class
    username:{   //designing column
    type : String
    },
    email:{
        type: String
    },
    googleId:{
    type: String
    },
    profileImgae:{
        type:String
    }
})
//model method
const User=mongoose.model(" User",userSchema)// User == table ko naam , userschema=code k ma cha ta tyo
export default User