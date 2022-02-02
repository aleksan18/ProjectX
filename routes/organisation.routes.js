const axios = require("axios");
require("dotenv").config();
const { Router } = require("express");
const Organisation = require("../model/Organisation");
const { check, validationResult } = require("express-validator");
const router = Router();
const jwt = require("jsonwebtoken");

router.post("/login", [
    check("email", "Enter valid email").normalizeEmail().isEmail(),
    check("password", "Enter password").exists().notEmpty(),
  ],async(req,res)=>{
    try{
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          return res.status(400).json({
            errors: errors.array(),
            message: "Invalid authorization data",
          });
        }
        const {email,password} = req.body

        const orgCheck = await Organisation.findOne({email});
        if (!orgCheck) {
            return res.status(400).json({
              message: "Invalid authorization data",
              errors: [{ value: email, msg: "User not found", param: "email" }],
            });
        }
        // const isMatch = await bcrypt.compare(password, user.password);

        const org = await Organisation.findOne({email}).select("Google organisationName password userList email username totalPayment totalUsers Slack").populate("userList");
        console.log(password);
        console.log(org.password);
        if (password !== org.password) {
            return res.status(400).json({
              message: "Invalid authorization data",
              errors: [
                { value: "", msg: "Wrong password, try again", param: "password" },
              ],
            });
        }
        const token = jwt.sign({ id: org.id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        console.log(org.username);
        console.log(org.Slack);
        res.json({ token,exp: token.exp, id: org.id,organisationName:org.organisationName,username: org.username,email:org.email,userList:org.userList,totalPayment:org.totalPayment,totalUsers:org.totalUsers,Google:org.Google,Slack:org.Slack});
    }catch(error){
        console.log(error);  
        return res.status(500).json({
        message: "Invalid data",
        errors: [
          { value: error, msg: error.message },
        ],
      });
    }
})

module.exports = router;