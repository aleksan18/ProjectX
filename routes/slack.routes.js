const axios = require("axios");
require("dotenv").config();
const { Router } = require("express");
const validator = require("validator");
const { check, validationResult } = require("express-validator");
const Organisation = require("../model/Organisation");
const {
    Slack,
    SlackUser,
    SlackURL,
    checkResponse,
  } = require("../utils/project.utils");
  


const router = Router();
router.get("/redirect",async(req,res)=>{
    try{
        console.log(req.body);
        console.log(req.query);
        const token = await axios.post("https://slack.com/api/oauth.v2.access?client_id="+process.env.SLACK_CLIENT_ID+"&client_secret="+process.env.SLACK_CLIENT_SECRET+"&code="+req.query.code+"&grant_type=authorization_code")
        .then((response) => response.data)
        .catch((error) => {
            console.log(error);
        });
        console.log(token.data);
        console.log(token)
        const organisation = await Organisation.findOne({email:"plyolab@plyolab.com"})

        console.log(token.access_token);
        organisation.Slack.token= token.access_token;
        await organisation.save();
        res.redirect("http://localhost:3000/")
    }catch(e){
        console.log(e);
    }
})

router.post("/users",async (req,res)=>{
    try{
       const response= await Slack.get(SlackURL("users.list"))
        return res.status(200).json({response:response.data})
    }catch(error){
        console.log(error);
        return res.status(400).json({error:error,message:error.message})
    }
})
router.post("/lastLogin",async (req,res)=>{
    try{
       const response= await SlackUser.get(SlackURL("team.accessLogs"))
        return res.status(200).json({response:response.data})
    }catch(error){
        console.log(error);
        return res.status(400).json({error:error,message:error.message})
    }
})
router.post("/billing",async (req,res)=>{

    try{
       const response= await SlackUser.get(SlackURL("team.billing.info"))
        return res.status(200).json({response:response.data})
    }catch(error){
        console.log(error);
        return res.status(400).json({error:error,message:error.message})
    }
})
router.post("/chat",async (req,res)=>{

    try{
       const response= await Slack.get(SlackURL("conversations.list"))
        return res.status(200).json({response:response.data})
    }catch(error){
        console.log(error);
        return res.status(400).json({error:error,message:error.message})
    }
})


router.post("/conversations",async (req,res)=>{

    try{
        const {members}= req.body
        //console.log(members);
        const returnArray=[];
        for( i in members){
        console.log(i)
        const response= await Slack.get(SlackURL("users.conversations?types=public_channel,private_channel,mpim,im&&user="+members[i].id))
        returnArray.push({id:members[i].id,channels:response.data.channels});
    }
        return res.status(200).json(returnArray)
    }catch(error){
        console.log(error);
        return res.status(400).json({error:error,message:error.message})
    }
})
router.post("/conversationsHistory",async (req,res)=>{

    try{
        const conversationsList= await Slack.get(SlackURL("conversations.list"))
        const conversations= conversationsList.data.channels
        //console.log(conversations)
        const returnArray=[];
        for(i in conversations){
            //console.log(conversations[i].id);
            const response= await Slack.get(SlackURL("conversations.history?channel="+conversations[i].id))
            returnArray.push({id:conversations[i].id,conversationsMessages:response.data.messages});
        }
       
        return res.status(200).json(returnArray)
    }catch(error){
        console.log(error);
        return res.status(400).json({error:error,message:error.message})
    }
})
router.post("/userActivity",async (req,res)=>{

    try{
        const {id}= req.body
       const response= await Slack.get(SlackURL("users.getPresence?user="+id))
        return res.status(200).json({response:response.data})
    }catch(error){
        console.log(error);
        return res.status(400).json({error:error,message:error.message})
    }
})





module.exports = router;
