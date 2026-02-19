const bcrypt=required("bcryptjs");
const  user = require('../models/userModel');
const jwt=required("jsonwebtoken");

const login = async(req,res)=>{
    try{
    const {username,password,role}=req.body;
    const user=await user.findOne({username});
    if(!user){
        res.status(404).json({message:"User not found"});
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        res.status(400).json({message:"Invalid credentials"});
    }
const token=jwt.sign({id:user._id,role:user.role},
                     process.env.JWT_SECRET,
                     {expiresIn:"1h"});
res.status(200).json({token});
    }catch(err){
        res.status(500).json({message:"something went wrong"});
    }
}

const register = async(req,res)=>{
    try{
    const {username,password,role}=req.body;
    const hashedpassword=await bcrypt.hash(password,10);
    const newUser=await new user({username,password:hashedpassword,role});
    await newUser.save();
    res.status(201).json({message:`User ${username} registered successfully`});
    }catch(err){
        res.status(500).json({message:"something went wrong"});
    }
};

module.exports={
    login,
    register
};