export const AuthActions = {
    AUTH_PASS:"AUTH_PASS",
    AUTH_FAIL:"AUTH_FAIL",
}
export const authPass = () =>({
    type:AuthActions.AUTH_PASS,   
  
})
export const authFail = () =>({
    type:AuthActions.AUTH_FAIL,    

})
