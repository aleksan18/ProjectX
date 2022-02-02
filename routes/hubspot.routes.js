const axios = require("axios");
require("dotenv").config();
const { Router } = require("express");
const validator = require("validator");
const { check, validationResult } = require("express-validator");
const {
    Slack,
    SlackURL,
    Hubspot,
    HubspotURL,
    checkResponse,
  } = require("../utils/project.utils");
const User = require("../model/User");


const router = Router();


router.post("/test",async (req,res)=>{

    try{
      
        const testUser= new User({
            username:"Test",
            email:"rfwe@mail.com",
            firstName:"Test",
            lastName:"Testing",
            role:"USER",

        })
        await testUser.save();
        console.log(testUser);
        return res.status(200).json({message:"SUCCESS"})
    }catch(error){
        console.log(error);
        return res.status(400).json({error:error,message:error.message})
    }
})
router.post("/users",async (req,res)=>{
    try{
        const response= await Hubspot.get(HubspotURL("users"));
        console.log(response.data);
        return res.status(200).json({message:"SUCCESS",response:response.data})
    }catch(error){
        console.log(error);
        return res.status(400).json({error:error,message:error.message})
    }
})


module.exports = router;