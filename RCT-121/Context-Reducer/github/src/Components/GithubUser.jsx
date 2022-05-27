import React, { useEffect, useReducer } from "react";
import axios from "axios";
const initstate = {
  loading: true,
  error: false,
  data: null,
};
const githubAction = {
  fetch: "fetch",
  success: "success",
  failure: "failure",
};
const githubReducer = (state, action) => {
  switch (action.type) {
    case githubAction.fetch: {
      return {
        ...state,
        loading: true,
        error: false,
        data: null,
      };
    }
    case githubAction.success: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    }
    case githubAction.failure: {
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
      type: githubAction.fetch,
    });
    axios({
      url: "https://api.github.com/search/users",
      method: "GET",
      params: {
        q: "masai",
      },
    })
      .then((res) =>
        dispatch({
          type: githubAction.success,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: githubAction.failure,
        })
      );
  }, []);
  console.log(data);
  return (
    <div>
      {loading && <div>loading</div>}
      {error && <div>error</div>}
      {data?.items.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.avatar_url} width="50" alt="" />
            <div>{item.login}</div>
          </div>
        );
      })}
    </div>
  );
};
