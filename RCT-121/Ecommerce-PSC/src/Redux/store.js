import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { itemReducer } from "./Products/reducer";
import { cartReducer } from "./Cart/reducer";
import thunk from "redux-thunk";
import { orderReducer } from "./Orders/reducer";
import { authReducer } from "./Auth/reducer";

const rootReducer = combineReducers({
  productStore: itemReducer,
  cartStore: cartReducer,
  orderStore: orderReducer,
  authStore: authReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
