import axios from "axios"
export const actions = {
    GET_CHAR_REQUEST: 'GET_CHAR_REQUEST',
    GET_CHAR_SUCCESS: 'GET_CHAR_SUCCESS',
    GET_CHAR_FAILURE: 'GET_CHAR_FAILURE',
}

export const getCharRequest = ()=>({
    type: actions.GET_CHAR_REQUEST,
})
export const getCharSuccess = (data)=>({
    type: actions.GET_CHAR_SUCCESS,
    payload: data
})
export const getCharFailure= ()=>({
    type: actions.GET_CHAR_FAILURE,
})

export const getAllData = ({dispatch,page,sort,})=>()=>{
    const getRequest = getCharRequest();
    dispatch(getRequest);
    axios({
        url:"http://localhost:8080/results",
        method: "GET",
        params: {
            page: page,
            _limit: 5,
            _sort: "species",
            _order:`${sort}`
        }
    }).then(res=>{
        const getSuccess = getCharSuccess(res.data);
        dispatch(getSuccess);
    }).catch(err=>{
        const getError = getCharFailure();
        dispatch(getError);
    })
}
export const getCharData = ({dispatch,params})=>()=>{
    const getRequest = getCharRequest();
    dispatch(getRequest);
    axios({
        url:`http://localhost:8080/results/${params.id}`,
        method: "GET",
       
    }).then(res=>{
        const getSuccess = getCharSuccess(res.data);
        dispatch(getSuccess);
    }).catch(err=>{
        const getError = getCharFailure();
        dispatch(getError);
    })
}