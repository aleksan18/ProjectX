import React from 'react';
import { NavLink } from "react-router-dom";
import {Grid,Card,Button,Drawer,List,ListItemText,ListItem,Divider} from "@mui/material";
import {connect} from "react-redux";
import "./navbar.css";

const Navbar = ({successful}) => {
    const drawerWidth = 120;
    if(successful){
        return (
            <div >
                <Drawer
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                },
              }}
              variant="permanent"
              anchor="left"
            >
                <List>
                        <ListItem component={NavLink} button to={`/home`}>
                        <ListItemText primary={"Home"}>
                        </ListItemText>
                        </ListItem>
                        <Divider/>
                        <ListItem component={NavLink} button to={`/pricing`}>
                        <ListItemText primary={"About"}>
                        </ListItemText>
                        </ListItem>
                        <Divider/>
                        <ListItem component={NavLink} button to={`/about`}>
                        <ListItemText primary={"Pricing"}>
                        </ListItemText>
                        </ListItem>
                        <Divider/>
                </List>
                <List sx={{ position:"absolute", bottom:0,width:"100%"}} >
                         <Divider  />
                        <ListItem  component={NavLink} button to={`/profile`}>
                        <ListItemText primary={"Profile"}>
                        </ListItemText>
                        </ListItem>
                 </List>      
               
            </Drawer>
            </div>
        );
    }
    return (
        <div >
            <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
            <List>
                    <ListItem component={NavLink} button to={`/home`}>
                    <ListItemText primary={"Home"}>
                    </ListItemText>
                    </ListItem>
                    <Divider/>
                    <ListItem component={NavLink} button to={`/pricing`}>
                    <ListItemText primary={"About"}>
                    </ListItemText>
                    </ListItem>
                    <Divider/>
                    <ListItem component={NavLink} button to={`/about`}>
                    <ListItemText primary={"Pricing"}>
                    </ListItemText>
                    </ListItem>
                    <Divider/>
            </List>
            <List sx={{ position:"absolute", bottom:0,width:"100%"}} >
                     <Divider  />
                    <ListItem  component={NavLink} button to={`/login`}>
                    <ListItemText primary={"Login"}>
                    </ListItemText>
                    </ListItem>
             </List>      
           
        </Drawer>
        </div>
    );
}
const mapStateToProps= (state)=>{
    return{
        successful: state.auth.successful
    }
}
export default connect(mapStateToProps,{})(Navbar);
