import { Typography,Grid, Button, Divider } from '@mui/material';
import { makeStyles } from "@mui/styles";
import React,{useState} from 'react';
import {connect} from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom';
import {GSuite,Slack} from "./OrgComponents";
const useStyles=makeStyles((theme)=>({
    org:{
        background:"#C4C4C4",
    },
    orgButton:{
        background: "#FFFDFD",
        borderRadius: "22px",
        color:"black",
        border:"none"
    },
    orgImg:{
        height: "10%",
        width:"12%",
    }

}))
const OrganisationPage = ({organisation}) => {
    const classes= useStyles();
    const [service,setService] = useState(0);
    return (
        <div className={classes.org}>
        <Grid sx={{marginLeft:"1%"}} container spacing={3}>
            <Grid  item xs={12} sm={4} md={4} lg={4} xl={4}><img className='org__img' src='./org.png' alt='' /></Grid> 
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={12}  md={12} lg={12} xl={12}> <Typography>Name: {organisation.organisationName}</Typography></Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}><Typography>Email: {organisation.email}</Typography></Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}><Button variant="outlined" className={classes.orgButton}> Update</Button></Grid>
        </Grid>
        <Divider></Divider>
        <Grid sx={{marginLeft:"1%",marginTop:"3%",paddingBottom:"3%"}} container spacing={3}>
            <Grid item xs={4}>
                <Grid container spacing={5}>
                <Grid item xs={12}><Button variant="outlined" className={classes.orgButton} onClick={()=>{setService(0)}}> General</Button></Grid>
                <Grid item xs={12}><Button variant="outlined" className={classes.orgButton} onClick={()=>{setService(1)}}> G-SUITE</Button></Grid>
                <Grid item xs={12}><Button variant="outlined" className={classes.orgButton} onClick={()=>{setService(2)}}> SHOPIFY</Button></Grid>
                <Grid item xs={12}><Button variant="outlined" className={classes.orgButton} onClick={()=>{setService(3)}}> SLACK</Button></Grid>
                <Grid item xs={12}><Button variant="outlined" className={classes.orgButton} component={NavLink} to="/authorization">AUTHORIZE OTHER SERVICES</Button></Grid>
                </Grid>
            </Grid>
            <Grid item xs={8}>
            {service === 0 ? (<><Typography>Total payment for services: {organisation.totalPayment} $/month</Typography>
            <Typography sx={{marginTop:"5%"}}>Total users: {organisation.totalUsers}</Typography></>):(<></>)}
            {service === 1 ? (<GSuite organisation={organisation}/>):(<></>)}
            {service === 2 ? (<></>):(<></>)}
            {service === 3 ? (<Slack organisation={organisation}/>):(<></>)}
            </Grid>
        </Grid>
   
        </div>
    );
}
const mapStateToProps = (state)=>{
    return{
        organisation:state.organisation
    }
}
export default connect(mapStateToProps,{})(OrganisationPage);
