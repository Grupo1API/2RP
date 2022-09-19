import React, { Component } from 'react';
import './style.css';

class Home extends Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='home'>
          <h2 className='titulo'>Seja bem vindo!</h2>
          <p className='texto'>
            Sistema de gerenciamento de horas extras, tempo de sobreaviso dos colaboradores da empresa 2RP.
          </p>

          <img className='img-logo-2rp' src="https://www.2rpnet.com.br/assets/images/2rp-net.svg" alt="logo da empresa"/> 
        </div>
      </div>
    );
  }
}

export default Home;
