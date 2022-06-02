import { actions } from "./action"
const initState = {count:0}
export const reducer = (state=initState, action) =>{
    switch(action.type){
        case actions.INCREMENT:{
            return{
                ...state,
                count:state.count+action.payload
            }
        }0
        case actions.DECREMENT:{
            return{
                ...state,
                count: state.count-action.payload
            }
        }
        default:{
            return state
        }
    }
}