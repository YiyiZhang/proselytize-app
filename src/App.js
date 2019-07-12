import React, { Component } from 'react';
import About from './About.js';
import Proselytize from './Proselytize.js';
import Menu from './Menu.js';


import logo from './logo.svg';
import './App.css';

class App extends Component {
  //set initial state to the first thing that should be rendered
  state = {
    currentSection: 'proselytize'
  }

  //function that selects the correct component to render based on menu item clicked
  showSection = () => {
    if (this.state.currentSection === 'Proselytize'){
      return <Proselytize />
    } else if (this.state.currentSection === 'About'){
      return <About />
    } else if (this.state.currentSection === 'Projects'){
      return <p>projects will load here once project component is made</p>
    }
  }

  //function that updates selected section
  updateSection = (sectionName) => {
    this.setState({currentSection: sectionName}); 
  }

  //render needs to be the last function in every Component
  render = () => {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>QUESTIONABLE INTENT GAMES</h2>
        </div>

        <Menu updater={this.updateSection}/>

        {this.showSection()}

      </div>
    );
  }


}

export default App;
