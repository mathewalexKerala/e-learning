const adminModel = require("../Models/adminModel");
const Admin = require("../Models/adminModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const nodemailer= require('nodemailer');
require('dotenv').config()
const {SMTP_PASSWORD} = process.env
module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await Admin.findOne({ email });
    console.log('ddd',email, password, username, createdAt ,existingUser)
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const admin = await Admin.create({ email, password, username, createdAt });
    const token = createSecretToken(admin._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, admin});
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
    const admin = await Admin.findOne({ email });
    if(!admin){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,admin.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(admin._id);
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
  console.log('this is email',email)
  
 adminModel.findOne({email})
  .then(admin =>{

    if(!admin){
      return res.send({Status:"User doesnot exist"})
    }
   
    const token=jwt.sign({id:admin._id},"jwt_secret_key",{expiresIn:"1d"})

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mathewalex557@gmail.com',
        pass: SMTP_PASSWORD
      }
    });
    
    var mailOptions = {
      from: 'mathewalex557@gmail.com',
      to: email,
      subject: 'Reset your password',
      text: `http://localhost:3000/admin/reset-password/${admin._id}/${token}`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        return res.send({Status:"Success"})
      }
    });
     })
}

module.exports.ResetPassword = async(req,res)=>{
  console.log('this is reset password')
  const {id,token}=req.params
  const {password} = req.body

  jwt.verify(token,"jwt_secret_key",(err,decoded)=>{
    if(err){
      return res.json({Status:"Error with token"})
    }else{
      bcrypt.hash(password,10)
      .then(hash=> {
        adminModel.findByIdAndUpdate({_id:id},{password:hash})
        .then(u=>res.send({Status:"Successfully updated password"}))
      })
      .catch(err => res.send({Status:err}))
  }

})


}
