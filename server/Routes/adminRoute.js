const { Signup ,Login,ForgotPassword,ResetPassword} = require("../Controllers/AdminAuthController.js");
const {userVerification} = require('../Middlewares/AuthMiddleware')
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post('/',userVerification)
router.post('/forgot-password',ForgotPassword)



router.post('/reset-password/:id/:token',ResetPassword)



module.exports = router;