import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";

export const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.authStore.auth);
  const location = useLocation();
  console.log(auth);
  if (auth) {
    return children;
  }
  return <Navigate to="/login" state={location} replace={true} />;
};
