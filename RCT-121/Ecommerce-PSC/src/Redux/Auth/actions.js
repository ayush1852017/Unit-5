import axios from "axios";
import { actions } from "./actionType";

// Authentication Action Creator

export const authRequest = () => ({
  type: actions.AUTH_REQUEST,
});
export const authSuccess = (data) => ({
  type: actions.AUTH_SUCCESS,
  payload: data,
});
export const authFailure = (payload) => ({
  type: actions.AUTH_FAILURE,
  payload,
});

// Authentication

export const authUser = (payload) => (dispatch) => {
  dispatch(authRequest());
  axios({
    url: "https://reqres.in/api/login",
    method: "POST",
    data: payload,
  })
    .then((res) => {
      dispatch(authSuccess(res.data));
    })
    .catch((err) => {
      dispatch(authFailure(err));
    });
};
