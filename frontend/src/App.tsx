import React from 'react';
import Cliente from './pages/cadastro_cliente';
import Apont_hora_extra  from './pages/Apont_hora_extra/index'
import Apont_sobreaviso  from './pages/Apont_sobreaviso/index'
import './App.css';
import { Router } from 'express';
import {BrowserRouter, Route, Routes as Switch, Navigate} from "react-router-dom"

export const App = () =>  {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/Cliente' element={<Cliente/>}/>
        <Route path='/HoraExtra' element={<Apont_hora_extra/>}/>
        <Route path='/Sobreaviso' element={<Apont_sobreaviso/>}/>
        
      </Switch>
    </BrowserRouter>
  
  );
}

export default App;
