import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import { charReducer } from "./reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({reducer:charReducer})
export const store = createStore(rootReducer,applyMiddleware(thunk))