import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Cliente from './pages/cadastro_cliente';
import Apont_hora_extra from './pages/apont_hora_extra';
import Apont_sobreaviso from './pages/apont_sobreaviso';
import CentroResultado from './pages/cadastro_centro_resultado';
import Login from './pages/login';
import Home from './pages/home';
import Quadro_cliente from './pages/quadro_cliente';
import UsuarioCreate from './pages/usuario/usuario_create';
import UsuarioUpdate from './pages/usuario/usuario_update';


const Main = () => (
  <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cliente" element={<Cliente />} />
      <Route path="/hora-extra" element={<Apont_hora_extra />} />
      <Route path="/sobreaviso" element={<Apont_sobreaviso />} />
      <Route path="/centro-resultado" element={<CentroResultado />} />
      <Route path="/quadro-clientes" element={<Quadro_cliente />} />
      <Route path="/login" element={<Login />} />
      <Route path="/usuario/create" element ={<UsuarioCreate/>}/>
      <Route path="/usuario/update" element ={<UsuarioUpdate/>}/>
    </Routes>
  </Container>
);

export default Main;
