import { actions } from "./actionType";

const initState = {
  loading: false,
  error: false,
};
export const orderReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actions.ADD_ORDER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.ADD_ORDER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case actions.ADD_ORDER_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
