import {
    LOGIN_REQUESTING,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from "../constants/organisation";
  const initialState = {
    requesting: false,
    successful: false,
    errors: [],
  };


  const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case LOGIN_REQUESTING:
        return {
          requesting: true,
          successful: false,
          errors: [],
        };
      case LOGIN_SUCCESS:
        return {
          errors: [],
          requesting: false,
          successful: true,
        };
      case LOGIN_FAILURE:
        return {
          errors: action.errors,
          requesting: false,
          successful: false,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  