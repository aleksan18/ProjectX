import { connect } from "react-redux";
import { createSearchParams,NavLink,useSearchParams} from "react-router-dom";
import {Typography,Button} from "@mui/material";
import {useEffect} from "react";
import { sendToken } from "../redux/actions/google";
const AuthPage =({sendToken})=>{
    const [searchParams,setSearchParams]= useSearchParams()

  
    useEffect(() => {
        console.log(searchParams.get("code")); 
        const scope = searchParams.get("scope");
        const code = searchParams.get("code");
        sendToken(scope,code);
    }, []);
    return(
        <div>
        <Typography>Your Google account has been authenticated</Typography>
        <Button component={NavLink} to={"/"}>Return to main</Button>
        </div>
      
    )
}
const mapStateToProps = (state) => ({

});

const connected = connect(mapStateToProps,{sendToken})(AuthPage);

export default connected;