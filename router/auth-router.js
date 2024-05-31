
const express = require("express");
const router = express.Router();
const auth=require("../controllers/auth-controller");
const signupSchema = require('../validators/auth-validator');
const validate =require('../middlewares/validate-middleware');


router.route("/").get(auth.home);
router.route("/register").post(validate(signupSchema), auth.register)
router.route("/Login").post(auth.Login);


module.exports = router;




