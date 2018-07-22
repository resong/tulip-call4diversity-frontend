import React, { Component } from "react";

import "./App.css";

// Custom components
import Header from "./components/Header.js";
import Title from "./components/Title.js";
import Button from "./components/Button.js";

class App extends Component {
  componentDidMount() {
    // this is here as an example for how to connect to the backend
    // it should be removed once development has started
    this.props.healthCheck();
  }

  render() {
    return (
      <div className="App">
        <Header>
          <Title name="Call for Diversity" />
          <Button name="Submit Event" />
        </Header>
      </div>
    );
  }
}

export default App;
