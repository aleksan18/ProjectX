import axios from "axios";
const connectAccountUrl="/api/google/connect";
const sendTokenUrl = "/api/google/";
export const getGoogle=()=>{
    return axios.post(connectAccountUrl,{}).then(response => response.data).catch((error)=>{
        throw error.response.data;
    })
}
export const sendAuthToken=(token,scope)=>{
    console.log(token)
    console.log(scope)
    return axios.get(sendTokenUrl+"?code="+token+"&scope="+scope).then(response => response.data).catch((error)=>{
        throw error.response.data;
    })
}