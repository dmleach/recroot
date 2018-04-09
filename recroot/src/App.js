import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
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
        <div className="EventForm">
          <EventForm />
        </div>
      </div>
    );
  }
}

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'ChooseOne'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('The event you are attending is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select Event:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="ChooseOne">Choose One</option>
            <option value="GameFest">GameFest</option>
            <option value="Game-O-Rama">Game-O-Rama</option>
            <option value="WellPlayed">Well Played</option>
            <option value="LXG">League of Extraordinary Gamers</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;