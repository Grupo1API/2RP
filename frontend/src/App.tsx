import { Box, Center, ChakraProvider, CSSReset } from "@chakra-ui/react";
import React, { Component } from 'react';

import Sidebar from './components/sidebar';
import Main from './main';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <ChakraProvider>
          <div>
          <Sidebar />
          <Center>
          <CSSReset />
          <Box alignItems="center" p={24}>
              <Main />
          </Box>
          </Center>
          </div>
        </ChakraProvider>
      </Router>
    );
  }
}

export default App;
