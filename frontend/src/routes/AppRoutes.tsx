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
import Verba from '../pages/cadastro_verba';
import Turno from '../pages/cadastro_turno';
import Adicional from '../pages/adic_noturno';
import Fechamento from '../pages/fechamento';
import Quadro_verba from '../pages/quadro_verba';
import Parametros from '../pages/parametros';
import Quadro_turno from '../pages/quadro_turno';


const AppRoutes = () => (
  <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cliente" element={<Cliente />} />
      <Route path="/apontamento-horas" element={<ApontamentoHoras />} />
      <Route path="/centro-resultado" element={<CentroResultado />} />
      <Route path="/verba" element ={<Verba/>}/>
      <Route path="/turno" element ={<Turno/>}/>   
      <Route path="/adicional" element ={<Adicional/>}/>  
      <Route path="/fechamento" element ={<Fechamento/>}/> 
      <Route path="/login" element={<Login />} />
      <Route path="/quadro_verba" element={<Quadro_verba />}/>
      <Route path="/quadro_turno" element={<Quadro_turno />}/>
      <Route path="/parametros" element={<Parametros />}/>
      <Route path="/usuario/create" element ={<UsuarioCreate/>}/>
      <Route path="/usuario/update" element ={<UsuarioUpdate/>}/>
    </Routes>
  </Container>
);

export default AppRoutes;
