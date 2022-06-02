import axios from "axios";
import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const Login = () => {
  const [state, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const loginUser = async () => {
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
    })
      .then((res) => {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data.token,
        });
        alert("Success");
        const redirect = searchParams.get("name");
        if (redirect) {
          navigate(redirect);
        } else {
          navigate("/store");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  if (state.isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h2>Login</h2>
      <button onClick={loginUser}>Login</button>
    </div>
  );
};
