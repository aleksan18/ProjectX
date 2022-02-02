const { Router, response } = require("express");
const axios = require("axios");
require("dotenv").config();
const router = Router();
var token;

router.get("/connect",async(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    const {hmac,shop,timestamp} = req.query;
    console.log(hmac);

    return res.status(201).redirect(`https://`+shop+`/admin/oauth/authorize?client_id=${process.env.SHOPIFY}&scope=read_content&redirect_uri=http://localhost:5000/api/shopify/&state=${hmac}`)

})
router.get("/",async(req,res)=>{
    console.log(req.query);
    const response=await axios.post(`https://${req.query.shop}/admin/oauth/access_token`,{client_id:process.env.SHOPIFY,client_secret:process.env.SHOPIFY_SECRET,code:req.query.code}).then(response=>response.data).catch((error) => {
        throw error.response.data;
      });
    const {access_token,scope}=response;
      console.log(response);
      console.log(access_token);
      token=access_token;
      console.log(token)
      console.log(scope);
    return res.redirect("http://localhost:3000");
})
module.exports = router;