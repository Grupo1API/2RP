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
    <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      <Route path="/" element={<Home />} />
      <Route path="/cliente" element={<Cliente />} />
      <Route path="/quadro-clientes" element={<Quadro_cliente />} />
      <Route path="/apontamento-horas" element={<ApontamentoHoras />} />
      <Route path="/centro-resultado" element={<CentroResultado />} />
      <Route path="/verba" element={<Verba />} />
      <Route path="/turno" element={<Turno />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element ={<Usuario/>}/>
      <Route path="/quadro-usuarios" element ={<Quadro_Usuario/>}/>
      <Route path="/quadro-centro-resultado" element={<Quadro_resultado />} />
      <Route path="/quadro-verba" element={<Quadro_verba />}/>
      <Route path="/quadro-turno" element={<Quadro_turno />}/>
      <Route path="/parametros" element={<Parametros />}/>
      <Route path="/aprov-hora-extra" element={<Aprov_hora_extra />} />

      <Route path="/adicional" element ={<Adicional/>}/>  
      <Route path="/fechamento" element ={<Fechamento/>}/> 
    </Routes>
  </Container>
);

export default AppRoutes;
