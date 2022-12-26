import express from 
"express";
import { getAllUser, login, signup } from "../controllers/user.controller";

const router=express.Router();

router.get("/",getAllUser);
router.post("/signup",signup);
router.post("/login",login)

export default router; 

//  "name": "debasree",
// "password": "123456",
// "email": "shreeghosh1999@gmail.com",