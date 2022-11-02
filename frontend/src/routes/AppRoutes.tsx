import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Cliente from '../pages/cadastro_cliente';
import ApontamentoHoras from '../pages/cadastro_apontamento_horas';
import CentroResultado from '../pages/cadastro_centro_resultado';
import Login from '../pages/login';
import Home from '../pages/home';
import UsuarioCreate from '../pages/usuario/usuario_create';
import UsuarioUpdate from '../pages/usuario/usuario_update';


const AppRoutes = () => (
  <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cliente" element={<Cliente />} />
      <Route path="/apontamento-horas" element={<ApontamentoHoras />} />
      <Route path="/centro-resultado" element={<CentroResultado />} />
      <Route path="/login" element={<Login />} />
      <Route path="/usuario/create" element ={<UsuarioCreate/>}/>
      <Route path="/usuario/update" element ={<UsuarioUpdate/>}/>
    </Routes>
  </Container>
);

export default AppRoutes;
