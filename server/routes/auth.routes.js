const router = require("express").Router();
const authcontroller = require('../controllers/auth.controller')

router.post("/signup", authcontroller.signUp)
router.post("/signin", authcontroller.signIn)


module.exports =router;
