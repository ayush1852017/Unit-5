import React from "react";
import { Route, Routes } from "react-router";
import { ProductPage } from "../Components/ProductPage";
import { Home } from "./Home";
import { Products } from "./Products";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
};
