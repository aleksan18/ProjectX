import axios from "axios";
const getUsersURL="/api/slack/users"
const getConversationsURL="/api/slack/conversations";
const getConversationsHistoryURL="/api/slack/conversationsHistory";
export const getUsers=()=>{
    return axios.post(getUsersURL,{}).then(response=>response.data).catch((error)=>{
        throw error.response.data;
    })

}

export const getConversations=(members)=>{
    return axios.post(getConversationsURL,{members}).then(response=>response.data).catch((error)=>{
        throw error.response.data;
    })

}

export const getConversationsHistory=(conversations)=>{
    return axios.post(getConversationsHistoryURL,{conversations}).then(response=>response.data).catch((error)=>{
        throw error.response.data;
    })

}