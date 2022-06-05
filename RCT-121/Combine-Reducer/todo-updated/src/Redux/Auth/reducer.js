import { ACTIONS } from "../todo/action"

const initState = {
    laoding:false,
    auth:true,
    error:false
}
export const authReducer = (state=initState, action)=>{
    switch(action.type){
        case ACTIONS.AUTH_PASS:{
            return{
                ...state,
                loading: false,
                auth:true,
                error:false,
            }
        }
        case ACTIONS.AUTH_FAIL:{
            return{
                ...state,
                loading: false,
                auth: false,
                error:true,
            }
        }
        default:{
            return state
        }
    }
}