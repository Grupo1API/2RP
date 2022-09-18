import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Cliente from './pages/cadastro_cliente';
import Home from './pages/home';

const Main = () => (
  <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cliente" element={<Cliente />} />
    </Routes>
  </Container>
);

export default Main;
