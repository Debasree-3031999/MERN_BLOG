import User from "../model/User.model";

import bcrypt from 'bcryptjs';

export const getAllUser = async (req, res, next) => {
    let users;

    try {
        users = await User.find()
    } catch (error) {
        console.log(error)

    }
    if (!users) {
        return res.status(404).json({ message: "No User Found" });
    }
    return res.status(200).json({ users });

};


export const signup = async (req, res, next) => {
 const { name, password, email } = req.body;
    let existingUser
    try {
        existingUser =
            await User.findOne({ email })
    } catch (error) {
        console.log(error)
    }
    if (existingUser) {
        return res.status(400).json({ message: "User already Exists ! login Instead" })
    }
    const hashedPassword = bcrypt.hashSync(password)
    const user = new User({
        name,
        password: hashedPassword,
        email,
        blogs:[],  
    })
    try {
        await user.save()
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:"Missing data!" })
    }

    return res.status(201).json({ user })

}

export const login = async (req, res, next) => {
    const { password, email } = req.body;
    console.log(password, email)
    let existingUser
    try {
        existingUser =
            await User.findOne({ email })
    } catch (error) {
        console.log(error)
    }
    if (!existingUser) {
        return res.status(400).json({ message: "Couldn't Find By This Email" })
    }
    console.log("user details",existingUser)
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordCorrect) {
        // if(password!==existingUser.password){
        return res.status(400).json({ message: "Incorrect Password" })
    }
    {
        res.status(200).json({ message: "Login Successful" , user:existingUser})
    }
}
