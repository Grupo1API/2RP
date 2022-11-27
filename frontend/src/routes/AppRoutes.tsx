import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Cliente from '../pages/cadastro_cliente';
import ApontamentoHoras from '../pages/cadastro_apontamento_horas';
import CentroResultado from '../pages/cadastro_centro_resultado';
import Login from '../pages/login';
import Home from '../pages/home';
import Usuario from '../pages/cadastro_usuario';
import Quadro_Usuario from '../pages/quadro_usuario';
import Verba from '../pages/cadastro_verba';
import Turno from '../pages/cadastro_turno';
import Quadro_cliente from '../pages/quadro_cliente';
import Quadro_resultado from '../pages/quadro_centro_resultado';
import Adicional from '../pages/adic_noturno';
import Fechamento from '../pages/fechamento';
import Quadro_verba from '../pages/quadro_verba';
import Parametros from '../pages/parametros';
import Quadro_turno from '../pages/quadro_turno';
import Aprov_hora_extra from '../pages/aprov_hora_extra';
import PrivateRoute from './PrivateRoutes';

const AppRoutes = () => (
  <Container>
    <Routes>
      <Route path="/login" element={ <Login />} />

      <Route
        path="/"
        element={
          <PrivateRoute roles={["administrador", "gestor", "colaborador"]}>
            <Home />
          </PrivateRoute>
        }
      />

      <Route
        path="/cliente"
        element={
          <PrivateRoute roles={["administrador"]}>
            <Cliente />
          </PrivateRoute>
        }
      />

      <Route
        path="/quadro-clientes"
        element={
          <PrivateRoute roles={["administrador", "gestor"]}>
            <Quadro_cliente />
          </PrivateRoute>
        }
      />

      <Route
        path="/apontamento-horas"
        element={
          <PrivateRoute roles={["administrador", "gestor", "colaborador"]}>
            <ApontamentoHoras />
          </PrivateRoute>
        }
      />

      <Route
        path="/centro-resultado"
        element={
          <PrivateRoute roles={["administrador", "gestor"]}>
            <CentroResultado />
          </PrivateRoute>
        }
      />

      <Route
        path="/verba"
        element={
          <PrivateRoute roles={["administrador"]}>
            <Verba />
          </PrivateRoute>
        }
      />

      <Route
        path="/tuno"
        element={
          <PrivateRoute roles={["administrador"]}>
           <Turno />
          </PrivateRoute>
        }
      />

      <Route
        path="/create"
        element={
          <PrivateRoute roles={["administrador"]}>
            <Usuario/>
          </PrivateRoute>
        }
      />

      <Route
        path="/quadro-usuarios"
        element={
          <PrivateRoute roles={["administrador"]}>
            <Quadro_Usuario/>
          </PrivateRoute>
        }
      />

      <Route
        path="/quadro-centro-resultado"
        element={
          <PrivateRoute roles={["administrador", "gestor"]}>
            <Quadro_resultado />
          </PrivateRoute>
        }
      />    

      <Route
        path="/quadro-verba"
        element={
          <PrivateRoute roles={["administrador"]}>
            <Quadro_verba />
          </PrivateRoute>
        }
      />

      <Route
        path="/quadro-turno"
        element={
          <PrivateRoute roles={["administrador"]}>
            <Quadro_turno />
          </PrivateRoute>
        }
      />  

      <Route
        path="/parametros"
        element={
          <PrivateRoute roles={["administrador"]}>
            <Parametros />
          </PrivateRoute>
        }
      />

      <Route
        path="/aprov-hora-extra"
        element={
          <PrivateRoute roles={["administrador", "gestor"]}>
            <Aprov_hora_extra />
          </PrivateRoute>
        }
      />
      
      <Route
        path="/adicional"
        element={
          <PrivateRoute roles={["administrador", "gestor", "colaborador"]}>
            <Adicional />
          </PrivateRoute>
        }
      />

       <Route
        path="/fechamento"
        element={
          <PrivateRoute roles={["administrador"]}>
            <Fechamento/>
          </PrivateRoute>
        }
      /> 
    </Routes>
  </Container>
);

export default AppRoutes;
