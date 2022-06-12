import React from "react";
import { Route, Routes } from "react-router";
import { Login } from "../Components/Login";
import { PrivateRoute } from "../Components/PrivateRoute";
import { ProductPage } from "../Components/ProductPage";
import { Cart } from "./Cart";
import { Home } from "./Home";
import { Products } from "./Products";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
