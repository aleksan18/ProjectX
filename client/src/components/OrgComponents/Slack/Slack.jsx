import React from 'react';
import { Typography,Grid } from '@mui/material';
const Slack = ({organisation}) => {
    return (
        <div>
            <Grid container spacing={3}>

            
                <Grid item xs={12}><Typography> Billing information: {organisation.Slack.billing} $/month  </Typography></Grid>
                <Grid item xs={6}> <Typography >Active members:{organisation.Slack.activeMembers}</Typography></Grid>
                <Grid item xs={6}>  <Typography>Total members:{organisation.Slack.totalMembers}</Typography></Grid>
                <Grid item xs={12}> <Typography>New members:{organisation.Slack.newMembers}</Typography></Grid>
                <Grid item xs={12}> <Typography>G Suite Basic licenses:  {organisation.Slack.chats}</Typography></Grid>
                
            </Grid>
        </div>
    );
}

export default Slack;
