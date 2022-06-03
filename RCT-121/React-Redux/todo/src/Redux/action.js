import axios from 'axios';
export const Actions = {
    GET_TODO_REQUEST:"GET_TODO_REQUEST",
    GET_TODO_SUCCESS:"GET_TODO_SUCCESS",
    GET_TODO_FAILURE:"GET_TODO_FAILURE",
    ADD_TODO_REQUEST:"ADD_TODO_REQUEST",
    ADD_TODO_SUCCESS:"ADD_TODO_SUCCESS",
    ADD_TODO_FAILURE:"ADD_TODO_FAILURE"
}
export const todoRequest = ()=>({
    type: Actions.GET_TODO_REQUEST,

})
export const todoSuccess = (data)=>({
    type: Actions.GET_TODO_SUCCESS,
    payload: data

})
export const todoFailure = ()=>({
    type: Actions.GET_TODO_FAILURE,
    
})
export const addTodoRequest = ()=>({
    type: Actions.ADD_TODO_REQUEST,

})
export const addTodoSuccess = (data)=>({
    type: Actions.ADD_TODO_SUCCESS,
    payload: data

})
export const addTodoFailure = ()=>({
    type: Actions.ADD_TODO_FAILURE,
    
})
export const getTodos = (dispatch) =>{
    const todoReqAction = todoRequest();
    dispatch(todoReqAction)
    axios({
        url: "http://localhost:8080/todos",
        method: "GET",
      }).then((res)=>{
          const todoSuccessAction = todoSuccess(res.data);
          dispatch(todoSuccessAction)
      }).catch((err)=>{
          const todoFailureAction = todoFailure();
          dispatch(todoFailureAction)
          console.error(err)
      })

}
export const addTodos = ({title,dispatch}) =>{
    const todoReqAction = addTodoRequest();
    dispatch(todoReqAction)
    axios({
        url: "http://localhost:8080/todos",
        method: "POST",
        data:{
            title,
            status:false
        }
      }).then((res)=>{
          const todoSuccessAction = addTodoSuccess();
          dispatch(todoSuccessAction)
      }).catch((err)=>{
          const todoFailureAction = addTodoFailure();
          dispatch(todoFailureAction)
          console.error(err)
      })

}
