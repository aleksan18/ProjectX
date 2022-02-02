import React from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import {AuthPage,MainPage,HomePage, Login,OrganisationPage} from "./components";
import { connect } from "react-redux";

const Routing = ({  }) => {
  return (
    <Routes>
      <Route path="/" exact element={ <MainPage></MainPage>}>
         
      </Route>
      <Route path="/googleAuth" element={<AuthPage></AuthPage>}>
        
      </Route>
      <Route path="/home" element={<HomePage></HomePage>} >

      </Route>
      <Route path="/about" element={<HomePage></HomePage>} >

      </Route>
      <Route path="/pricing" element={<HomePage></HomePage>} >

      </Route>
      <Route path="/login" element={<Login></Login>} >

      </Route>
      <Route path="/profile" exact element={ <OrganisationPage></OrganisationPage>}>
         
      </Route>
      <Route path="*" element={ <Navigate replace to="/" />}></Route>
    </Routes>
  );
};

const mapStateToProps = (state) => ({

});

const connected = connect(mapStateToProps)(Routing);

export default connected;