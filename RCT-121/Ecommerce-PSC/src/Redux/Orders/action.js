import axios from "axios";
import { emptyCart } from "../Cart/actions";
import { actions } from "./actionType";

// Adding Products to Orders Action Creator
export const addOrderRequest = () => ({
  type: actions.ADD_ORDER_REQUEST,
});
export const addOrderSuccess = (data) => ({
  type: actions.ADD_ORDER_SUCCESS,
  payload: data,
});
export const addOrderFailure = (data) => ({
  type: actions.ADD_ORDER_FAILURE,
  payload: data,
});

// Adding Products to Orders Array in server

export const addOrderData = (payload) => (dispatch) => {
  dispatch(addOrderRequest());
  const orderPayload = [];
  for (let product of payload) {
    product &&
      orderPayload.push(
        axios({
          url: "http://localhost:8080/orders",
          method: "POST",
          data: product,
        })
      );
  }

  Promise.all(orderPayload)
    .then(() => {
      dispatch(addOrderSuccess());
    })
    .then(() => dispatch(emptyCart(payload)))
    .catch((err) => {
      dispatch(addOrderFailure(err));
    });
};
