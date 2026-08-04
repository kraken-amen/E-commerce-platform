import validator from "validator";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";



const  createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1d"})
}
//route for user login
const loginUser = async (req, res) => {
    try{
        const{email,password}= req.body;
        const user=await userModel.findOne({email})
        if (!user) {
            return res.status(401).json({ message: "User not exists" });
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if (isMatch) {
            const token=createToken(user._id)
            res.json({success:true,token})
        }
        else{
            res.json({ message:"email or password not valid" });
        }
    }
    catch{
        console.log(error)
        return res.status(410).json({ message: "error" });
    }
    
}
//route for user register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const exists = await User.findOne({ email });
        if (exists) {
            return res.status(400).json({ message: "User already exists" });
        }
        //validating email format &strong password
        if(!validator.isEmail(email)){
            return res.status(400).json({success:false, message: "Invalid email format" });
        }
        if(!validator.isStrongPassword(password)){
            return res.status(400).json({success:false, message: "Invalid password format" });
        }
        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new userModel({
            name,
            email,
            password:hashedPassword
        })
        const savedUser =await user.save();
        const token = createToken(savedUser._id);
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Error"})
    }
}
//rout for admin login
const adminLogin = async (req, res) => {
    
}
export { loginUser, registerUser,adminLogin}