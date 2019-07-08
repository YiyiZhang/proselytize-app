import React, { Component } from 'react';
import About from './About.js';
import Proselytize from './Proselytize.js';


import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>QUESTIONABLE INTENT GAMES</h2>
        </div>
        // <p className="App-intro">
        //   To get started, edit <code>src/App.js</code> and save to reload.
        // </p>

        <About />

        <Proselytize />

      </div>
    );
  }
}

export default App;
