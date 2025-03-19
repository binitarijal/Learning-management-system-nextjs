import mongoose from "mongoose";
const schema=mongoose.Schema

const courseSchema=new schema({
    courseName:{
        typ: String
    },
    courseDescription: String,
    coursePrice:{
    type: Number
    },
    courseDuration:{
        type: String
    }
})
const Course=mongoose.model("Course",courseSchema)
export default Course