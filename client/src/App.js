import './App.css';
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Routing from "./routes.jsx";
import { Navbar } from './components';
const theme = createTheme();
const useStyles=makeStyles(()=>({
  main:{
    backgroundColor:"rgb(10, 56, 55)",
    display:"flex",
    width:"100vw",
    height: '100vh',
  },
  content:{
 
    marginLeft:"7vw",
    flex: 1,
    flexShrink:1,
    flexBasis:0,
    padding:theme.spacing(5),
  }
}))
function App() {
  const classes = useStyles();
  return (
    <Router>
  
    <div className={classes.main}>
    <CssBaseline />
      <Navbar></Navbar>
      <div className={classes.content}>
      <Routing></Routing>
      </div>
    </div>
    </Router>

  );
}

export default App;
