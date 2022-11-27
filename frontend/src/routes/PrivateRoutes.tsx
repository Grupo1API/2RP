import React from 'react';
import { Navigate, Route, useLocation, BrowserRouter as Router } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  let location = useLocation();

  // TODO: Verificar se o cookie existe
  let logado = true;

  if (!logado) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;