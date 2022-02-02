const axios = require("axios");

const checkResponse = (response) => {
    //console.log(response.data);
    if (response.data.status_code === 20000) {
      if (
        response.data.tasks[0].status_code === 20000 ||
        response.data.tasks[0].status_code === 20100
      ) {
        return { isOk: true, data: response.data.tasks[0].result };
      } else {
        return {
          isOk: false,
          code: response.data.tasks[0].status_code,
          error: response.data.tasks[0].status_message,
        };
      }
    } else {
      return {
        isOk: false,
        code: response.data.status_code,
        error: response.data.status_message,
      };
    }
  };
  const axiosGoogle = (method,tokens,url)=>{
   return axios.create({
      method:method,
      headers:{
        authorization:"Bearer: " + tokens.tokens.access_token,
      },
      "Content-Type":"application/json",
      url:url,
    })
  }
    const Jira = axios.create({
      baseUrl:"",
      auth:{
        username:"",
        password:""
      },
      headers: { "Authorization": "Basic", "Content-Type": "application/json" },
  
    })
  const SlackURL = (node) =>{
    return "https://slack.com/api/"+node;
  }
  const HubspotURL= (node) =>{
    return "https://api.hubspot.com/settings/v3/"+node;
  }
  const Hubspot = axios.create({
    baseUrl:"https://api.hubspot.com/settings/v3/",
    headers:{"Authorization": "Bearer "+process.env.HUBSPOT,}
  })
  const Shopify =(token)=>{
    axios.create({
      headers:{"X-Shopify-Access-Token":`${token}`}
    })
  } 
  const Slack = axios.create({
    baseUrl:"https://slack.com/api",
    
    headers:{"Authorization": "Bearer "+process.env.SLACK_API_BOT,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
  })
  const SlackUser = axios.create({
    baseUrl:"https://slack.com/api",
    
    headers:{"Authorization": "Bearer "+process.env.SLACK_API_USER,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
  })
  module.exports={
    axiosGoogle,
    checkResponse,
    HubspotURL,
    Hubspot,
    SlackUser,
    Jira,
    SlackURL,
    Slack,
  }