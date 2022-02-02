import {React,useState} from 'react';
import { Link,Dialog, TextField,DialogTitle,DialogActions,Button,DialogContent,DialogContentText } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import {connect} from "react-redux";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";
import { loginRequest } from '../redux/actions/organisation';
const theme = createTheme()
const useStyles = makeStyles(() => ({
    paper: {
      color:"#989898",
      margin: theme.spacing(15,0,0,50),

    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
   
      color:"#989898",
      width: "100%", // Fix IE 11 issue.
  
      marginTop: theme.spacing(1),
    },
    textField:{
      
      color:"#989899"
    },
    dialog:{
      marginBottom:"10px"
    },
    input:{
      color:"#989898",
    },
    submit: {
      margin: theme.spacing(3, 1, 2),
    },
  }));
const Login = ({loginRequest}) => {
    const classes= useStyles();
    const navigate=useNavigate()
    const [open,setOpen]=useState(true);
    const handleClose = ()=>{
        setOpen(false);
        navigate(-1);
    }
    const [form,setForm]=useState({
        email:"",
        password:""
    });
    const [formErrors, setFormErrors] = useState({});
    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }
    const submitHandler= ()=>{
      
        loginRequest(form);
        navigate("/profile")
    }
    return(
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">User Login</DialogTitle>
        <DialogContent className={classes.dialog}>
          <DialogContentText>
          
          </DialogContentText>
          <TextField
            style={{marginBottom:theme.spacing(2)}}
            required={true}
            onChange={changeHandler}
            autoFocus
            value={form.email}
            id="email"
            name="email"
            label="Email"
            type="email"
            autoComplete="email"
            fullWidth
            error={!!formErrors["email"]}
            helperText={formErrors["email"] ? formErrors["email"] : ""}
          />
          <TextField
            className={classes.dialog}
            onChange={changeHandler}
            value={form.password}
            id="password"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            fullWidth
            error={!!formErrors["password"]}
            helperText={formErrors["password"] ? formErrors["password"] : ""}
          />
          <Link
          component={NavLink}
          variant="body2"
          to="/register"
          onClick={handleClose}
          >
            Register
          </Link>
        </DialogContent>
        <DialogActions>
          <Button sx={{margin:"2%"}} onClick={handleClose} variant="contained" color="secondary">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={submitHandler}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      
    )
}
const mapStateToProps = (state)=>{
  return{

  }
}
const connected = connect(mapStateToProps,{loginRequest})(Login);

export default connected;
