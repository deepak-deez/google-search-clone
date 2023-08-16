import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Results } from "./Results";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate replace to="/search" />} />

      {["/search", "/images", "/videos", "/news"].map((path) => (
        <Route exact path={path} element={<Results />} />
      ))}
    </Routes>
  );
};
