import Box from '@mui/material/Box';
import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import Main from './main';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.StrictMode>
          <div >
            <Sidebar />
            <Main />
          </div>
        </React.StrictMode>
      </Router>
    );
  }
}

export default App;