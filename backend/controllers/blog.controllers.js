import mongoose from "mongoose";
import Blog from "../model/Blog.model"
import User from "../model/User.model"

export const getAllBlog=async(req,res,next)=>{
    let blogs;
    try {
        blogs=await Blog.find().populate('user');
    } catch (error) {
        console.log(error)
    }
    if(!blogs){ 
        return res.status(400).json({message:"No Blogs Found"})
    }
    return res.status(200).json({blogs})

}
////////////////////////////////////////////////////////////////////////////////////////
export const addBlog = async (req,res,next)=>{
    const {title,description,image,user}=req.body;
  let existingUser;
  try {
    existingUser=await User.findById(user);
  } catch (error) {
    return console.log(error)
  }  
  if(!existingUser){
    return res.status(400).json({message:"Unable To Find User By Id"})
  } 
    const blog=new Blog({
        title,
        description,
        image,
        user,
    });
    try {
        const session= await mongoose.startSession();
        session.startTransaction();
        await blog.save({session});
        existingUser.blogs.push(blog);
        await existingUser.save({session});
        await session.commitTransaction();
    } catch (error) {
        return console.log(error);
    };
    return res.status(200).json({blog})
};
///////////////////////////////////////////////////////////////////////////////////////////////
export const updateBlog=async(req,res,next)=>{
    const {title,description}=req.body;
    const blogId=req.params.id;
    let blog;
    try {
        blog=await Blog.findByIdAndUpdate(blogId,{title,description});
    } catch (error) {
        return console.log(error)
    }
    if(!blog){
        return res.save(500).json({message:""})
    }
    return res.status(200).json({blog})
}
////////////////////////////////////////////////////////
export const getById=async (req,res,next)=>{
    const id=req.params.id;
    let blog;
    try {
        blog=await Blog.findById(id)
    } catch (error) {
        return console.log(error)
        
    }
    if(!blog){
        return res.status(404).json({message:"No Blog Found"});
    }
    return res.status(200).json({blog})
}
//////////////////////////////////////////////////////
export const deleteBlog=async(req,res,next)=>{
    const id=req.params.id;
    let blog;
    try {
        blog=await Blog.findByIdAndDelete(id).populate("user");
    await blog.user.blogs.pull(blog);
    await blog.user.save(); 
    } catch (error) {
         console.log(error);
         return error;
    }
    if(!blog){
        return res.status(500).json({message:"unable to Delete"})
    }
    return res.status(200).json({message:"deleted successfully"})
}
//////////////////////////////////////////////////////////////////////////////////////////
export const getByUserId=async(req,res,next)=>{
   const userId=req.params.id;
   let userBlog;
   try {
    userBlog=await User.findById(userId).populate("blogs")
   } catch (error) {
    return console.log(error)
     } 
     if(!userBlog){
        return res.status(400).json({message:"No Blog Found"})
     }
     return res.status(200).json({blogs:userBlog})
}
