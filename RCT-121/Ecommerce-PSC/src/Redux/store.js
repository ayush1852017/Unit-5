import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import { itemReducer } from "./Products/reducer";
import { cartReducer } from "./Cart/reducer";
import thunk from "redux-thunk";
import { orderReducer } from "./Orders/reducer";

const rootReducer = combineReducers({
    productStore:itemReducer,
    cartStore:cartReducer,
    orderStore:orderReducer,
})
export const store = createStore(rootReducer,applyMiddleware(thunk))