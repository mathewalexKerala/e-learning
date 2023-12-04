const UserModel = require("../Models/UserModel");
const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const nodemailer= require('nodemailer');
const sendMail = require("../util/sendMail");
module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    console.log('ddd',email, password, username, createdAt ,existingUser)
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};
module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error);
  }
}


module.exports.ForgotPassword = async(req,res,next)=>{
  const {email} = req.body
  UserModel.findOne({email})
  .then(user =>{
    if(!user){
      return res.send({Status:"User doesnot exist"})
    }
    const token=jwt.sign({id:user._id},"jwt_secret_key",{expiresIn:"1d"})
   try {
    sendMail({
  email:email,
  subject:'Forgot Password',
  message:'Forgot Password'
    })
   } catch (error) {
    
   }
  })
}