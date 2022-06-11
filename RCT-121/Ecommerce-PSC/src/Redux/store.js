import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import { itemReducer } from "./reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({ecommerceStore:itemReducer})
export const store = createStore(rootReducer,applyMiddleware(thunk))