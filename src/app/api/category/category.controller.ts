// we defining function here

import dbConnect from "@/database/connection"
import Category from "@/database/models/category.schema"
import { NextRequest } from "next/server"
import { authMiddleware } from "../../../../middleware/auth.middleware"
export async function createCategory(req: Request){
try{
    const response=authMiddleware(req as NextRequest)
    await dbConnect()
    const{name, description}= await req.json()
    //to check already exist or not
    const existingCategory=await Category.findOne({name:name})
    if(existingCategory){
        return Response.json({
            message:"Category already exists with that name"
        },{status:400}) 
    }
   await Category.create({
        name: name, 
        description:description
    })
    return Response.json({
        message : "Category created successfully"
    },{status:201})
}
catch(error){
console.log(error)
return Response.json({
    message: "something went wrong"
},{status:500})
}
}

export async function getCategories (req:Request) {
  try{
    dbConnect()
    const categories= await Category.find()
    if(categories.length===0){
     return Response.json({
         Message:"No categories exist"
     },{status:404})
    }
    return Response.json({
     message:"category fetched successfully",
     data:categories,
    },{status:200})
  }
  catch(error){
    console.log(error)
    Response.json({
        message:"something went wrong"
    },{status:500})
  }
}