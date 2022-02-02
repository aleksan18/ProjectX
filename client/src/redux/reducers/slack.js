import { GET_SLACK_USERS,GET_SLACK_USERS_SUCCESS } from "../constants/slack"


const initialState={
    users:[],
    isSuccess:false,
    conversations:{},
    
}

const reducer=(state=initialState,action)=>{

    switch(action.type){
        case GET_SLACK_USERS:
            return{
                users:[],
                isSuccess:false,
                conversations:{}
            }
        case GET_SLACK_USERS_SUCCESS:
            return{
                users:action.payload.users,
                isSuccess:true,
                conversations:action.payload.conversations,
                conversationsHistory:action.payload.conversationsHistory
            }
        default: 
        return state
    }

}

export default reducer;