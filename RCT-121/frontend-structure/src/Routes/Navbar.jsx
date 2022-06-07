import React, { useState } from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: ".5rem",
        padding: "1rem",
        border: "1px solid #000",
        alignItems: "center",
        backgroundColor: "#000",
        color: "#ff9500",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "#ff9500" }}>
        <div>LOGO</div>
      </Link>
      <div>
        <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
          <Link
            to="/character"
            style={{ textDecoration: "none", color: "#ff9500" }}
          >
            <li>Characters</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
