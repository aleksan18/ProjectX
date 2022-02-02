import { call, put, takeLatest } from "@redux-saga/core/effects"
import { GET_SLACK_USERS,GET_SLACK_USERS_SUCCESS,GET_GOOGLE_AUTH,SEND_TOKEN } from "../constants/slack"
import { getConversations, getConversationsHistory, getUsers } from "../../services/slack.service";
import { getSlackUsersSuccess } from "../actions/slack";
import { getGoogle,sendAuthToken } from "../../services/google.service";
import {setGoogleAuth} from "../actions/google";
function* getSlackUsers(action){
    try{
        console.log("users");
       const users= yield call(getUsers);
       console.log(users);
       const conversations= yield call(getConversations,users.response.members);
       console.log(conversations);
       const conversationsHistory= yield call(getConversationsHistory,conversations)
       yield put(getSlackUsersSuccess(users,conversations,conversationsHistory))
    }catch(err){
        console.log(err);

    }

}
function* authGoogleFlow(action){
    try{
       
        const {scope,token}=action.payload
        console.log(scope);
        console.log(token);
        const message = yield call(sendAuthToken,scope,token);
        console.log(message);
    }catch(e){
        console.log(e);
    }
}
function* googleFlow(){
    try{
        const url = yield call(getGoogle);
        console.log(url.url);
        yield put(setGoogleAuth(url.url));
    }catch(e){
        console.log(e);
    }
}
function* slackWatcher(){
yield takeLatest(GET_SLACK_USERS,getSlackUsers);
yield takeLatest(GET_GOOGLE_AUTH,googleFlow);
yield takeLatest(SEND_TOKEN,authGoogleFlow)
}

export default  slackWatcher