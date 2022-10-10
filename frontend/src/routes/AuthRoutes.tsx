import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { AuthMenu } from "../components/Menu";
import React from "react";

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <AuthMenu />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRoutes;