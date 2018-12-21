import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { subscribeToTimer } from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: "no timestamp yet"
    };
    subscribeToTimer((err, timestamp) => this.setState({ timestamp }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <p className="App-intro">
            This is the timer value: {this.state.timestamp}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
