import React, { useEffect, useReducer } from "react";
import axios from "axios";
const initstate = {
  data: null,
  loading: true,
  error: false,
};
const fetchAction = {
  fetch: "fetch",
  success: "success",
  failure: "failure",
};
const githubReducer = (state = initstate, action) => {
  switch (action.type) {
    case fetchAction.data: {
      return {
        ...state,
        loading: true,
        error: false,
        data: null,
      };
    }
    case fetchAction.loading: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    }
    case fetchAction.error: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
  }
};
export const GithubUser = () => {
  const [{ data, loading, error }, dispatch] = useReducer(
    githubReducer,
    initstate
  );
  useEffect(() => {
    dispatch({
      type: githubReducer.fetch,
    });
    axios({
      method: "get",
      url: "https://api.github.com/search/users",
      params: {
        q: "masai",
      },
    })
      .then((res) =>
        dispatch({
          type: githubReducer.success,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: fetchAgithubReducerction.failure,
        })
      );
  }, []);
  return (
    <div>
      {loading && <div>loading</div>}
      {error && <div>error</div>}
      {data?.map((item) => {
        return <div key={item.id}>{item.login}</div>;
      })}
    </div>
  );
};
