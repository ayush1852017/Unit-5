import axios from "axios";
export const ACTIONS = {
    GET_TODO_REQUEST:"GET_TODO_REQUEST",
    GET_TODO_SUCCESS:"GET_TODO_SUCCESS",
    GET_TODO_FAILURE:"GET_TODO_FAILURE",
    ADD_TODO_REQUEST:"ADD_TODO_REQUEST",
    ADD_TODO_SUCCESS:"ADD_TODO_SUCCESS",
    ADD_TODO_FAILURE:"ADD_TODO_FAILURE"
}
export const getTodoRequest = () =>({
    type:ACTIONS.GET_TODO_REQUEST,
    
})
export const getTodoSuccess = (data) =>({
    type:ACTIONS.GET_TODO_SUCCESS,
    payload:data
    
})
export const getTodoFailure = () =>({
    type:ACTIONS.GET_TODO_FAILURE,
    
})
export const addTodoRequest = () =>({
    type:ACTIONS.ADD_TODO_REQUEST,
    
})
export const addTodoSuccess = (data) =>({
    type:ACTIONS.ADD_TODO_SUCCESS,
    payload:data
    
})
export const addTodoFailure = () =>({
    type:ACTIONS.ADD_TODO_FAILURE,
    
})

export const getTodos = (dispatch) => {
    const getTodoReqAction = getTodoRequest();
    dispatch(getTodoReqAction)
    axios({
        url: "http://localhost:8080/todos",
        method: "GET",

    }).then((res)=>{
        const getTodoSuccessAction = getTodoSuccess(res.data);
        dispatch(getTodoSuccessAction)
    }).catch((err) => {
        const getTodoFailureAction = getTodoFailure();
        dispatch(getTodoFailureAction)
    })
}