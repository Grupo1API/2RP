import React from 'react';
import { Navigate, Route, useLocation, BrowserRouter as Router } from 'react-router-dom';
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";

const PrivateRoute = ({
  children,
  roles
}: {
  children: JSX.Element;
  roles: Array<string>
}) => {
  const [cookies] = useCookies(["user"]);
  const usuario: any = cookies.user ? jwt_decode(cookies.user) : null;
  
  let location = useLocation();

  const userHasRequiredRole = usuario && roles.includes(usuario.role) ? true : false;

  if (!usuario) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (usuario && !userHasRequiredRole) {
    return <Navigate to="/login" state={{ from: location }} />;
    //<AccessDenied />; // build your won access denied page (sth like 404)
  }

  return children;
};

export default PrivateRoute;