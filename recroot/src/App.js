import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Recroot! (powered by React)</h1>
        </header>
        <p className="App-intro">
          Recroot is an app allowing you to connect with your fellow game convention attendees to quickly get a game session started.  
        </p>
        <button onClick={() => alert("Alert button clicked")}>Click for Alert</button>
      </div>
    );
  }
}

export default App;
