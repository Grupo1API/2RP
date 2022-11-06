import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import { AuthMenu } from "../components/Menu";
import React from "react";
import UsuarioCreate from "../pages/usuario/usuario_create";
import UsuarioUpdate from "../pages/usuario/usuario_update";

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <AuthMenu />
      <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/usuario/create" element ={<UsuarioCreate/>}/>
      <Route path="/usuario/update" element ={<UsuarioUpdate/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRoutes;