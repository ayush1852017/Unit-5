import { Actions } from "./action"

const initialState= {
    loading: false,
    todo: [],
    error:false
}
export const reducer= (state=initialState, action)=>{
    switch(action.type){
        case Actions.GET_TODO_REQUEST:{
            return{
                ...state,
                loading: true,
                error:false
            } 
        }
        case Actions.GET_TODO_SUCCESS:{
            return{
                ...state,
                todo:action.payload,
                loading:false,
                error:false
            }
         }
        
        case Actions.GET_TODO_FAILURE:{
            return{
                ...state,
                loading:false,
                error:true,
            } 
        }
        case Actions.ADD_TODO_REQUEST:{
            return{
                ...state,
                loading: true,
                error:false
            } 
        }
        case Actions.ADD_TODO_SUCCESS:{
            return{
                ...state,
                loading:false,
                // error:false
            }
         }
        
        case Actions.ADD_TODO_FAILURE:{
            return{
                ...state,
                loading:false,
                error:true,
            } 
        }
        
    }
}
