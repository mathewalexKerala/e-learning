const { Signup ,Login,ForgotPassword} = require("../Controllers/AuthController");
const {userVerification} = require('../Middlewares/AuthMiddleware')
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post('/',userVerification)
router.post('/forgot-password',ForgotPassword)
module.exports = router;
