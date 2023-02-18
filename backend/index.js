import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user.router';
import blogRouter from './routes/blog.router';
import cors from 'cors'
const app=express();
app.use(cors());
app.use(express.json()) 
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
const PORT=process.env.PORT || 5001;

mongoose.connect("mongodb+srv://admin1234:soitanPranjal@cluster0.1iwdzcf.mongodb.net/MERN_BLOG?retryWrites=true&w=majority").then(()=>{
    app.listen(PORT)
}).then(()=>{
    console.log(`database connected at ${PORT}`)
}).catch((error)=>{
    console.log(error)
});

// app.use("/",(req,res,next)=>{z
//     res.send("Hello world")  
// });

