import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        backgroundColor: "#000",
        color: "#fff",
        position: "sticky",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#ff9f00",
          border: "1px solid #ff9f00",
          padding: "1.2rem 2rem",
        }}
      >
        <div>Logo</div>
      </Link>
      <div>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "1rem",
            fontSize: "1.2rem",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#ff9f00" }}>
            <li>Home</li>
          </Link>
          <Link
            to="/product"
            style={{ textDecoration: "none", color: "#ff9f00" }}
          >
            <li>Product</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
