import { connect } from "react-redux";
import { getSlackUsers } from "../redux/actions/slack";
import { useEffect,useState } from "react";
import AppBar from "@mui/material/AppBar";
import { makeStyles } from "@mui/styles";
import {Grid,Card,Button,Drawer,List,ListItemText,ListItem,Divider} from "@mui/material";
import { SlackCards } from "./SlackCards";
import {getGoogleAuth} from "../redux/actions/google";


const useStyles=makeStyles((theme)=>({
    main:{
      backgroundColor:"rgb(10, 56, 55)",
      height:"1000px",
    },
    appBar: {
        zIndex: theme.zIndex + 1,
      },
  
  }))
 const MainPage=({users,isSuccess,conversations,conversationsHistory,getSlackUsers,getGoogleAuth,url})=>{
    const classes = useStyles();
    const drawerWidth = 120;
    const printArray=[]
    useEffect(()=>{
       // getSlackUsers();
        getGoogleAuth();
    },[])
    const update=()=>{
        console.log("TEST");
        getSlackUsers();
        
    }
    const [selectedConvo,setSelectedConvo] = useState("");
    const loadChatInfo=(id)=>{
        console.log(id)
        setSelectedConvo(id);
    }
    const openAuthGoogle= () =>{
        console.log(url);
        window.open(url,"_blank")
    }
    // if(isSuccess){

   
    return(

        <div>

        
        <Button onClick={openAuthGoogle}>Auth Google</Button>
        {console.log()}
        <a href={`https://slack.com/oauth/v2/authorize?client_id=${process.env.REACT_APP_SLACK_CLIENT_ID}&scope=calls:write,channels:manage,channels:history,channels:read,chat:write,chat:write.public,commands,chat:write.customize,conversations.connect:manage,conversations.connect:write,conversations.connect:read,emoji:read,channels:join,files:read,groups:history,files:write,groups:read,groups:write,im:read,im:write,incoming-webhook,links:read,links:write,mpim:history,mpim:read,mpim:write,pins:read,pins:write,reactions:read,reactions:write,reminders:read,reminders:write,remote_files:read,remote_files:share,remote_files:write,app_mentions:read,calls:read,team:read,usergroups:read,usergroups:write,users.profile:read,users:read,users:read.email,users:write,workflow.steps:execute,team.preferences:read,team.billing:read,im:history,dnd:read&user_scope=calls:read,channels:read,groups:read,im:read,mpim:read,pins:read,search:read,team.billing:read,team:read,usergroups:read,users.profile:read,users:read,users:read.email,admin`}> <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>
        {/* <SlackCards loadChatInfo={loadChatInfo} conversations={conversations} users={users} update={update} isSuccess={isSuccess}></SlackCards>
        <Grid>          
        <Grid item xs={6}>
            <Card>
           {conversationsHistory.map((item)=>{
               if(item.id === selectedConvo){
                   return(
                item.conversationsMessages.map((message)=>{
                    
                   const name= users.members.find((user)=>{
                        return user.id === message.user
                    })
                    
                   
                    if(message.type === "msg" && message.subtype !== "bot_add" && message.subtype !== "bot_join")
                    console.log(message.text)
                    return(
                        <Typography>
                    {users.id === message.user ? (<></>):(<></>)}{name.name} : {message.text}
                        </Typography>
                    ) 
                })
                   )
               
               }
            
               
           })}
            </Card>
        </Grid>
        </Grid> */}
        </div>
    )
    // }
    // else return(<></>)

}
const mapStateToProps=(state)=>({
    url: state.google.url,
    isSuccess:state.slack.isSuccess,
    users:state.slack.users.response,
    conversations:state.slack.conversations,
    conversationsHistory:state.slack.conversationsHistory
})
const connected=  connect(mapStateToProps,{getSlackUsers,getGoogleAuth})(MainPage);
export default connected;