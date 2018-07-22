import React, { Component } from "react";

import "./App.css";

// Custom components
import AppHeader from "./components/AppHeader.js";
import AppTitle from "./components/AppTitle.js";
import Button from "./components/Button.js";

class App extends Component {
  componentDidMount() {
    // this is here as an example for how to connect to the backend
    // it should be removed once development has started
    this.props.healthCheck();
  }

  render() {
    return (
      <div>
        <AppHeader>
          <AppTitle name="Call for Diversity" />
          <Button name="Submit Event" />
        </AppHeader>
      </div>
    );
  }
}

export default App;
