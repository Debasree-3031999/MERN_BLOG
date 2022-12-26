import mongoose from "mongoose";

// const Schema=mongoose.Schema();

const userSchema=  new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    }
});

export default mongoose.model("User",userSchema);
//User sholud be a collection which create in mongo and its name become---> users