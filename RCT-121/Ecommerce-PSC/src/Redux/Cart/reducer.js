import { actions } from "./actionType"


const initState = {
    loading: false,

    error: false,
    cart:[]
}
export const cartReducer = (state=initState, {type,payload})=>{
    switch(type){
       
        case actions.ADD_CART_REQUEST:{
            return{
                ...state,
                loading:true,
                error:false,
            }
        }
        case actions.ADD_CART_SUCCESS:{
            return{
                ...state,
                loading:false,
                cart:[...state.cart,payload],
                error:false,
            }
        }
        case actions.ADD_CART_FAILURE:{
            return{
                ...state,
                loading:false,
                error:true,
            }
        }
        case actions.FETCH_CART_REQUEST:{
            return{
                ...state,
                loading:true,
                error:false,
            }
        }
        case actions.FETCH_CART_SUCCESS:{
         
            return{
                ...state,
                loading:false,
                cart:[...payload],
                error:false,
            }
        }
        case actions.FETCH_CART_FAILURE:{
            return{
                ...state,
                loading:false,
                error:true,
            }
        }
        case actions.REMOVE_CART_REQUEST:{
            return{
                ...state,
                loading:true,
                error:false,
            }
        }
     
        case actions.REMOVE_CART_FAILURE:{
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