import { combineReducers } from "redux";

import slack from "./slack";
import google from "./google";
import auth from "./auth";
import organisation from "./organisation";
export default combineReducers({
    slack,google,auth,organisation
})