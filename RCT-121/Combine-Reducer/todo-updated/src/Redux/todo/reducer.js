import { AuthActions } from "../Auth/action"
import { ACTIONS } from "./action"

const initState = {
    laoding:false,
    todo:[],
    error:false
}
export const todoReducer = (state=initState, action)=>{
    switch(action.type){
        case ACTIONS.GET_TODO_REQUEST:{
            return{
                ...state,
                loading: true,
                error:false
            } 
        }
        case ACTIONS.GET_TODO_SUCCESS:{
            return{
                ...state,
                todo:action.payload,
                loading:false,
                error:false
            }
         }
        
        case ACTIONS.GET_TODO_FAILURE:{
            return{
                ...state,
                loading:false,
                error:true,
            } 
        }
        case ACTIONS.ADD_TODO_REQUEST:{
            return{
                ...state,
                loading: true,
                error:false
            } 
        }
        case ACTIONS.ADD_TODO_SUCCESS:{
            return{
                ...state,
                loading:false,
                // error:false
            }
         }
        
        case ACTIONS.ADD_TODO_FAILURE:{
            return{
                ...state,
                loading:false,
                error:true,
            } 
        }
        default:{
            return state
        }
        
    }
}