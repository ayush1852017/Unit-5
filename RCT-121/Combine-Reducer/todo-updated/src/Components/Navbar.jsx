import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authFail, authPass } from "../Redux/Auth/action";

export const Navbar = () => {
  const [authState, setAuthState] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.auth);
  const handleAuth = () => {
    auth
      ? setAuthState(false) && dispatch(authFail())
      : setAuthState(true) && dispatch(authPass());
    // console.log(authState);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: ".5rem",
        padding: "1rem",
        border: "1px solid #000",
        alignItems: "center",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
        <div>LOGO</div>
      </Link>
      <div>
        <ul style={{ listStyle: "none" }}>
          <li onClick={handleAuth}>{!authState ? "Login" : "Logout"}</li>
        </ul>
      </div>
    </div>
  );
};
