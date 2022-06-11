import { actions } from "./actions";

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
                loading:true,
                error:false,
            }
        }
        case actions.GET_ITEM_SUCCESS:{
            return{
                loading:false,
                data:payload,
                error:false,
            }
        }
        case actions.GET_ITEM_FAILURE:{
            return{
                loading:false,
                error:true,
            }
        }
        case actions.ADD_CART_REQUEST:{
            return{
                loading:true,
                error:false,
            }
        }
        case actions.ADD_CART_SUCCESS:{
            return{
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
            // console.log(state)
            return{
                ...state,
                loading:false,
                cart:[...payload],
                error:false,
            }
        }
        case actions.FETCH_CART_FAILURE:{
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