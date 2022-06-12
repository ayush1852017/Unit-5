import { actions } from "./actionType"


const initState = {
    loading: false,
    data: [],
    error: false,
    cart:[]
}
export const itemReducer = (state=initState, {type,payload})=>{
    switch(type){
        case actions.GET_ITEM_REQUEST:{
            return{
                ...state,
                loading:true,
                error:false,
            }
        }
        case actions.GET_ITEM_SUCCESS:{
            return{
                ...state,
                loading:false,
                data:payload,
                error:false,
            }
        }
        case actions.GET_ITEM_FAILURE:{
            return{
                ...state,
                loading:false,
                error:true,
            }
        }
        
        default:{
            return state;
        }
    }
}