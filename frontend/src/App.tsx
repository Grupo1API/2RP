import { Box, Center, ChakraProvider, CSSReset } from "@chakra-ui/react";
import React, { Component } from 'react';

import Sidebar from './components/sidebar';
import Main from './main';

import './App.css';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
