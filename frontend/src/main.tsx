import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Cliente from './pages/cadastro_cliente';
import Apont_hora_extra from './pages/Apont_hora_extra';
import Apont_sobreaviso from './pages/Apont_sobreaviso';
import Projeto from './pages/cadastro_projeto';
import Home from './pages/home';

const Main = () => (
  <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cliente" element={<Cliente />} />
      <Route path="/hora-extra" element={<Apont_hora_extra />} />
      <Route path="/hora-sobreaviso" element={<Apont_sobreaviso />} />
      <Route path="/projeto" element={<Projeto />} />
    </Routes>
  </Container>
);

export default Main;
