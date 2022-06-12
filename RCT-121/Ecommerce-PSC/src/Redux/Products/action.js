import axios from "axios"
import { actions } from "./actionType"

// Getting Products Action Creator
export const getItemRequest = ()=>({
    type: actions.GET_ITEM_REQUEST,
})
export const getItemSuccess = (data)=>({
    type: actions.GET_ITEM_SUCCESS,
    payload: data
})
export const getItemFailure= (data)=>({
    type: actions.GET_ITEM_FAILURE,
    payload: data
})

// Getting Products From Server

export const getAllData = ({dispatch,page,sort,})=>()=>{
    const getRequest = getItemRequest();
    dispatch(getRequest);
    axios({
        url:"http://localhost:8080/products",
        method: "GET",
        params: {
            page: page,
            // _limit: 5,
            _sort: "price",
            _order:`${sort}`
        }
    }).then(res=>{
        const getSuccess = getItemSuccess(res.data);
        dispatch(getSuccess);
    }).catch(err=>{
        const getError = getItemFailure(err);
        dispatch(getError);
    })
}

// Getting Clicked Product Details From Server

export const getItemData = ({dispatch,params})=>()=>{
    const getRequest = getItemRequest();
    dispatch(getRequest);
    axios({
        url:`http://localhost:8080/products/${params.id}`,
        method: "GET",
       
    }).then(res=>{
        const getSuccess = getItemSuccess(res.data);
        dispatch(getSuccess);
    }).catch(err=>{
        const getError = getItemFailure(err);
        dispatch(getError);
    })
}

