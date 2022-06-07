import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/character" style={{ textDecoration: "none", color: "#000" }}>
        <h4>See All Characters</h4>
      </Link>
    </div>
  );
};
