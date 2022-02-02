import { GET_GOOGLE_AUTH_SUCCESS, GET_SLACK_USERS,GET_SLACK_USERS_SUCCESS } from "../constants/slack"


const initialState={
    url:"",  
}

const reducer=(state=initialState,action)=>{

    switch(action.type){
        case GET_GOOGLE_AUTH_SUCCESS:
            return{
                url:action.payload
            }
        
        default: 
        return state
    }

}

export default reducer;