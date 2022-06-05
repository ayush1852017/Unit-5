import {legacy_createStore,combineReducers} from "redux";
import { authReducer } from "./Redux/Auth/reducer";
import { todoReducer } from "./Redux/todo/reducer";
const rootReducer = combineReducers({
    todo:todoReducer,
    auth:authReducer,
})
export const store = legacy_createStore(rootReducer);