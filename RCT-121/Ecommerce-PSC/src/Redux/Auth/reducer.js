import { actions } from "./actionType";

const initState = {
  auth: false,
  token: "",
  error: false,
};
export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actions.AUTH_REQUEST: {
      return {
        ...state,
        auth: false,
        token: "",
        error: false,
      };
    }
    case actions.AUTH_SUCCESS: {
      console.log(payload);
      return {
        ...state,
        auth: true,
        token: payload,
        error: false,
      };
    }
    case actions.AUTH_FAILURE: {
      return {
        ...state,
        auth: false,
        token: "",
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
