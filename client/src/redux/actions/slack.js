import { GET_SLACK_USERS,GET_SLACK_USERS_SUCCESS } from "../constants/slack";

export const getSlackUsers=()=>{
    console.log("action");
    return{
        type:GET_SLACK_USERS,
    }

}

export const getSlackUsersSuccess=(users,conversations,conversationsHistory)=>{
    return{
        type:GET_SLACK_USERS_SUCCESS,
        payload:{users,conversations,conversationsHistory}
    }

}
