import { actions } from "./actions";

const initState = {
    loading: false,
    data: [],
    error: false
}
export const charReducer = (state=initState, {type,payload})=>{
    switch(type){
        case actions.GET_CHAR_REQUEST:{
            return{
                loading:true,
                error:false,
            }
        }
        case actions.GET_CHAR_SUCCESS:{
            return{
                loading:false,
                data:payload,
                error:false,
            }
        }
        case actions.GET_CHAR_FAILURE:{
            return{
                loading:false,
                error:true,
            }
        }
        default:{
            return state;
        }
    }
}