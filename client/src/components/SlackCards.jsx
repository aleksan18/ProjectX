import { makeStyles } from "@mui/styles";
import {Grid,Card,Button,Typography} from "@mui/material";
import { useState } from "react";
const useStyles=makeStyles((theme)=>({
    main:{
      backgroundColor:"rgb(10, 56, 55)",
      height:"1000px",
    },
    appBar: {
        zIndex: theme.zIndex + 1,
      },
  
  }))

 const SlackCards=({users,loadChatInfo,isSuccess,conversations,update})=>{
    const classes=useStyles();
  

    return(
        <div>
        <Grid style={{marginTop:"2%", marginLeft:"2%"}} container spacing={2}> 
        <Button onClick={()=>update()}>Refresh</Button>
        {isSuccess ? (users.members.map((item)=>{
            return(
           <div>
           {item.name !== "slackbot" && item.name !== "usertracking" ? (
           
           
           <Grid item xs={6}>        
           <Card>

          <Grid container spacing={2}>
           <Grid item xs={6}><Typography variant="h6">{item.name}</Typography>

           <Typography variant="h6">Name: {item.profile.real_name_normalized}</Typography>
           </Grid>
           

           <Grid item xs={6}>
              {conversations.map((channel)=>{
                  if(channel.id === item.id && item.name !== "usertracking"){
                      return(
                      channel.channels.map((convo)=>{
                          return(
                              <Button onClick={()=>{loadChatInfo(convo.id)}} variant="h6">
                                  {convo.name}
                              </Button>
                          )
                      })
                      )
                  }
              })}
            </Grid>
            </Grid>
           </Card> 
             </Grid>
           
           
           ):(<></>)}

           
            </div>
             )
        })):(
            <Typography>No Users</Typography>
        )} 
        
        
        </Grid>
        </div> 
    )


}

export default SlackCards;