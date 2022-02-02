import { ORG_SET, ORG_UNSET, } from "../constants/organisation";

const initialState = {
  isAuthenticated: false,
  id: null,
  token: null,
  organisationName:null,
  email:null,
  username:null,
  userList:null,
  role: null,
  exp: null,
  totalUsers:null,
  totalPayment:null,
  Google:null,
  Slack:null,
};

const reducer = (state = initialState, action) => {
    console.log(action);
  switch (action.type) {
    case ORG_SET:
      return {
        isAuthenticated: true,
        id: action.payload.id,
        token: action.payload.token,
        email:action.payload.email,
        username:action.payload.username,
        userList:action.payload.userList,
        exp: action.payload.exp,
        organisationName:action.payload.organisationName,
        totalPayment:action.payload.totalPayment,
        totalUsers:action.payload.totalUsers,
        Google:action.payload.Google,
        Slack:action.payload.Slack,
      };
    case ORG_UNSET:
      return {
        isAuthenticated: false,
        id: null,
        token: null,
        organisationName:null,
        email:null,
        username:null,
        userList:null,
        role: null,
        exp: null,
        totalPayment:null,
        totalUsers:null,
        Google:null,
        Slack:null,
      };
    default:
      return state;
  }
};
export default reducer;
