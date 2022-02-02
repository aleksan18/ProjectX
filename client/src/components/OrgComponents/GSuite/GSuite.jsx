import { Typography,Grid } from '@mui/material';
import React from 'react';

const GSuite = ({organisation}) => {
    return (
        <div>
            <Grid container spacing={3}>

           
            <Grid item xs={12}><Typography> Billing information: {organisation.Google.billing} $/month  </Typography></Grid>
            <Grid item xs={6}> <Typography >Active members:{organisation.Google.activeMembers}</Typography></Grid>
            <Grid item xs={6}>  <Typography>Total members:{organisation.Google.totalMembers}</Typography></Grid>
            <Grid item xs={12}> <Typography>New members:{organisation.Google.newMembers}</Typography></Grid>
            
            <Grid item xs={12}> <Typography>G Suite Basic licenses:  {organisation.Google.basic}</Typography></Grid>
            <Grid item xs={12}> <Typography>G Suite Basic licenses in use:  {organisation.Google.basicUse}</Typography></Grid>
             </Grid>
        </div>
    );
}

export default GSuite;
