export const actions = {
    INCREMENT:"INCREMENT",
    DECREMENT:"DECREMENT",
}
export const incrCountAction = (payload)=>({type: actions.INCREMENT, payload})
export const decrCountAction = (payload)=>({type: actions.DECREMENT, payload})