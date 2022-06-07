import React from "react";
import { Route, Routes } from "react-router";
import { CharacterPage } from "../Components/CharacterPage";
import { Characters } from "./Characters";
import { Home } from "./Home";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Characters />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Routes>
    </>
  );
};
