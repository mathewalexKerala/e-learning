const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  console.log('user authentication')
  const token = req.cookies.token
  console.log('this is toke')
  try{

    if (!token) {
      return res.json({ status: false })
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
       return res.json({ status: false })
      } else {
        const user = await User.findById(data.id)
        if (user) return res.json({ status: true, user: user.username })
        else return res.json({ status: false })
      }
    })
  }catch(err){
    console.log(err.message)
  }
}