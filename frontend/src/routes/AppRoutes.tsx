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


const AppRoutes = () => (
  <Container>
    <Routes>
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
    </Routes>
  </Container>
);

export default AppRoutes;
