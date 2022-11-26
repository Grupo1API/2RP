import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Routes from "./routes";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <React.StrictMode>
          <div id="app">
            <Sidebar />
            <Routes />
          </div>
        </React.StrictMode>
      </Router>
    );
  }
}

export default App;
