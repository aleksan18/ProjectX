const { Router, response } = require("express");
const axios = require("axios");
const request = require("request");
require("dotenv").config();
const router = Router();
const axiosGoogle = require("../utils/project.utils")
const {google} = require('googleapis');
const User = require("../model/User");
const Organisation = require("../model/Organisation");
router.post("/connect",async(req,res)=>{
    const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_SECRET,
        "http://localhost:3000/googleAuth"
      );
    const scopes = [
        "https://www.googleapis.com/auth/admin.reports.usage.readonly",
        "https://www.googleapis.com/auth/analytics"
    ];
    
    const url = oauth2Client.generateAuthUrl({
        scope: scopes,
        state:JSON.stringify({
            callbackURL:req.body.callbackURL,
            userId:req.body.userId
        })
    });

    request(url,(err,response,body)=>{
        console.log(err);
        console.log("statusCode",response && response.statusCode);
        res.json({url})
    })
})


router.get("/",async(req,res)=>{
    console.log(req.params);
    console.log(req.body);
    console.log(req.query);
    const code = req.query.code;
    const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_SECRET,
        "http://localhost:3000/googleAuth"
      ); 
    const tokens  = await oauth2Client.getToken(code);
    console.log(tokens);
    const googlePart= {token:tokens.tokens.access_token}
    const organisation = await Organisation.findOne({email:"plyolab@plyolab.com"});
    console.log(organisation);
    organisation.Google.token=googlePart;
    await organisation.save();
    res.send("MESSAGE");
})
router.post("/usageReports",async(req,res)=>{
    const organisation = await Organisation.findOne({email:"plyolab@plyolab.com"});
    console.log(organisation);
   
    const response = axios.get("https://admin.googleapis.com/admin/reports/v1/usage/users/all/dates/2022-01-06",{headers:{Authorization:"Bearer "+organisation.Google.token.token}}).then(response=>response.data);
    console.log(response);
    res.send("MESSAGE");
})


module.exports = router;