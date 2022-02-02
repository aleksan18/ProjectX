import {LOGIN_REQUESTING,ORG_SET,ORG_UNSET} from "../constants/organisation";

export const loginRequest = (form)=>{
    console.log("here");
    return{
        type:LOGIN_REQUESTING,
        payload:form,
    }
};
export const unsetOrg = (error) => {
    return {
      type: ORG_UNSET,
      error:error
    };
  };
export const setOrg = (token,exp,id,organisationName ,userList, email, username,totalPayment,totalUsers,Google,Slack)=>{
    console.log("here");
    console.log(token);
    return{
        type:ORG_SET,
        payload:{token,exp,id,organisationName,userList,email,username,totalPayment,totalUsers,Google,Slack}
    }
}