import express from 'express';
import { addBlog, deleteBlog, getAllBlog, getById, getByUserId, updateBlog } from '../controllers/blog.controllers';
const blogRouter=express.Router()

blogRouter.get("/",getAllBlog);
blogRouter.post("/add",addBlog);
blogRouter.put("/update/:id",updateBlog);
blogRouter.get("/:id",getById);
blogRouter.delete("/:id",deleteBlog);
blogRouter.get("/user/:id",getByUserId)

export default blogRouter;

// {
//     "blog": {
//       "title": "dsgdg",
//       "description": "dsfjrgfiuf",
//       "image": "fvegr.jpg",
//       "user": "12324",
//       "_id": "63aaa85292dec8c447101e68",
//       "__v": 0
//     }
//   }