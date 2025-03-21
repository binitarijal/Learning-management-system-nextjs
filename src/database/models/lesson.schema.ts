import mongoose, {Schema} from "mongoose";

interface Ilesson extends Document{
    course: mongoose.Types.ObjectId,
    title:string,
    description:string,
    videoUrl:string,
    createdAt: Date
}
const lessonSchema=new Schema({
course:{
    type:Schema.Types.ObjectId,
    ref: "Course"
},
title:{
    type:String,
    required:true
},
description:{
    type: String,
    hhrequired: true
},
videoUrl:{
    type: String,
    required:true
},
createdAt:{
    type:Date,
    default:Date.now()
}
})

const Lesson= mongoose.models.Lesson || mongoose.model("Lesson", lessonSchema)
export default Lesson