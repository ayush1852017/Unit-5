import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const PrivateRoute = ({ children, to }) => {
  const [state] = useContext(AuthContext);
  if (state.isAuth) {
    return children;
  }
  return <Navigate to={to || "/login"} />;
};
