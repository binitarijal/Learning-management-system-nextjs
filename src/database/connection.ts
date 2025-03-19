 import mongoose from 'mongoose'
 const MONGODB_CS=process.env.MONGODB_CS // to import fron env file
 if(!MONGODB_CS){ // to check if it exist
    throw new Error("database string is must")
 }

 const dbConnect=async()=>{
    if(mongoose.connection.readyState===1){// to check if connection already exists 0 if not 1 if yes
console.log("db already connected")
return;
    }
        try{
    await mongoose.connect(MONGODB_CS)
    console.log("database connected successfully")
}
catch(error){
console.log("error connecting",error)
}
 }
 export default dbConnect 