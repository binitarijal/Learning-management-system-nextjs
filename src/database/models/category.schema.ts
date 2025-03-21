import mongoose from "mongoose";
import schema=mongoose.Schema


 interface Icategory extends Document{
name:string,
description?:string,
createdAt: Date,

 }
const categorySchema=new schema<Icategory>({

    name:{
        type: String,
        required:true,
        unique:true
    },
    description: String,
    createdAt: {
        type : Date,
        default: Date.now()
    }
})

const Category= mongoose.models.Category ||  mongoose.model("Category",categorySchema)
export default Category