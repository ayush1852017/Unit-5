import axios from "axios"
export const actions = {
    GET_ITEM_REQUEST: 'GET_ITEM_REQUEST',
    GET_ITEM_SUCCESS: 'GET_ITEM_SUCCESS',
    GET_ITEM_FAILURE: 'GET_ITEM_FAILURE',
    ADD_CART_REQUEST: 'ADD_CART_REQUEST',
    ADD_CART_SUCCESS: 'ADD_CART_SUCCESS',
    ADD_CART_FAILURE: 'ADD_CART_FAILURE',
    FETCH_CART_REQUEST: 'FETCH_CART_REQUEST',
    FETCH_CART_SUCCESS: 'FETCH_CART_SUCCESS',
    FETCH_CART_FAILURE: 'FETCH_CART_FAILURE',

}
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
// Adding Products to cart Action Creator
export const addCartRequest = ()=>({
    type: actions.ADD_CART_REQUEST,
})
export const addCartSuccess = (data)=>({
    type: actions.ADD_CART_SUCCESS,
    payload: data
})
export const addCartFailure= (data)=>({
    type: actions.ADD_CART_FAILURE,
    payload: data
})
// Fetching Products from cart Action Creator
export const fetchCartRequest = ()=>({
    type: actions.FETCH_CART_REQUEST,
})
export const fetchCartSuccess = (data)=>({
    type: actions.FETCH_CART_SUCCESS,
    payload: data
})
export const fetchCartFailure= (data)=>({
    type: actions.FETCH_CART_FAILURE,
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

// Adding Products to cart Array in server

export const addCartData = (payload)=>(dispatch)=>{
    
    dispatch(addCartRequest());
    axios({
        url:`http://localhost:8080/cart`,
        method: "POST",
        data:payload
       
    }).then(res=>{
        dispatch(addCartSuccess(res.data));
    }).catch(err=>{
        dispatch(addCartFailure(err));
    })
}


export const fetchCartData = ()=>(dispatch)=>{
    
    dispatch(fetchCartRequest());
    axios({
        url:'http://localhost:8080/cart',
        method: "GET", 
    }).then(res=>{
        dispatch(fetchCartSuccess(res.data));
    }).catch(err=>{
        dispatch(fetchCartFailure(err));
    })
}