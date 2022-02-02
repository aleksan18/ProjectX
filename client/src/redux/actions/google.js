import { GET_GOOGLE_AUTH,GET_GOOGLE_AUTH_SUCCESS, SEND_TOKEN} from "../constants/slack";

export const getGoogleAuth=()=>{
    return{
        type:GET_GOOGLE_AUTH,
    }

}
export const sendToken=(token,scope)=>{
    console.log("ADSA");
    return{
        type:SEND_TOKEN,
        payload:{token:token,scope:scope}
    }

}
export const setGoogleAuth=(url)=>{
    return{
        type:GET_GOOGLE_AUTH_SUCCESS,
        payload:url
    }
}