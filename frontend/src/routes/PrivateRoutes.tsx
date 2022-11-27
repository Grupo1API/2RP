import React from 'react';
import { Navigate, Route, useLocation, BrowserRouter as Router } from 'react-router-dom';

const PrivateRoute = ({
  children,
  roles,
}: {
  children: JSX.Element;
  roles: Array<string>;
}) => {
  let location = useLocation();

  // TODO: Verificar se o cookie existe e pegar a role do usuario
  let logado = true;
  let usuario = {
    role: 'Administrador'
  }

  const userHasRequiredRole = usuario && roles.includes(usuario.role) ? true : false;

  if (!logado) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (logado && !userHasRequiredRole) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;