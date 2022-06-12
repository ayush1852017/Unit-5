import axios from "axios";
import { actions } from "./actionType";

// Adding Products to cart Action Creator
export const addCartRequest = () => ({
  type: actions.ADD_CART_REQUEST,
});
export const addCartSuccess = (data) => ({
  type: actions.ADD_CART_SUCCESS,
  payload: data,
});
export const addCartFailure = (data) => ({
  type: actions.ADD_CART_FAILURE,
  payload: data,
});
// Fetching Products from cart Action Creator
export const fetchCartRequest = () => ({
  type: actions.FETCH_CART_REQUEST,
});
export const fetchCartSuccess = (data) => ({
  type: actions.FETCH_CART_SUCCESS,
  payload: data,
});
export const fetchCartFailure = (data) => ({
  type: actions.FETCH_CART_FAILURE,
  payload: data,
});
// Remove Products from cart Action Creator
export const removeCartRequest = () => ({
  type: actions.REMOVE_CART_REQUEST,
});
export const removeCartSuccess = () => ({
  type: actions.REMOVE_CART_SUCCESS,
});
export const removeCartFailure = (data) => ({
  type: actions.REMOVE_CART_FAILURE,
  payload: data,
});
// Remove Products from cart Action Creator
export const emptyCartRequest = () => ({
  type: actions.EMPTY_CART_REQUEST,
});
export const emptyCartSuccess = (data) => ({
  type: actions.EMPTY_CART_SUCCESS,
  payload: data,
});
export const emptyCartFailure = () => ({
  type: actions.EMPTY_CART_FAILURE,
});

// Adding Products to cart Array in server

export const addCartData = (payload) => (dispatch) => {
  dispatch(addCartRequest());
  axios({
    url: `http://localhost:8080/cart`,
    method: "POST",
    data: payload,
  })
    .then((res) => {
      dispatch(addCartSuccess(res.data));
    })
    .catch((err) => {
      dispatch(addCartFailure(err));
    });
};

// Fetching Products from Cart
export const fetchCartData = () => (dispatch) => {
  dispatch(fetchCartRequest());
  axios({
    url: "http://localhost:8080/cart",
    method: "GET",
  })
    .then((res) => {
      dispatch(fetchCartSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchCartFailure(err));
    });
};
// Removing Products from Cart
export const removeCartData = (id) => (dispatch) => {
  dispatch(removeCartRequest());
  axios({
    url: `http://localhost:8080/cart/${id}`,
    method: "DELETE",
  })
    .then((r) => {
      dispatch(removeCartSuccess());
    })
    .then(() => dispatch(fetchCartData()))
    .catch((err) => {
      dispatch(removeCartFailure());
    });
};

// Empty cart

export const emptyCart = (payload) => (dispatch) => {
  dispatch(emptyCartRequest());
  const deleteOrders = [];
  for (let obj of payload) {
    let temp = dispatch(removeCartData(obj.id));
    deleteOrders.push(temp);
  }
  Promise.all(deleteOrders)
    .then((r) => dispatch(emptyCartSuccess()))
    .catch((err) => dispatch(emptyCartFailure(err)));
};
