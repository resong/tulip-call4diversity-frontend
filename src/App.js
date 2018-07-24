import React, { Component } from "react";

import "./App.css";

// Custom components
import AppHeader from "./components/AppHeader.js";
import AppTitle from "./components/AppTitle.js";
import Button from "./components/Button.js";
import EventsContainer from "./components/EventsContainer.js";
import PageTitle from "./components/PageTitle.js";
import Event from "./components/Event.js";
import Criteria from "./components/Criteria.js";

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
        <EventsContainer>
          <PageTitle name="Upcoming Events" />
          <Event>
            <Criteria>
            </Criteria>
          </Event>
        </EventsContainer>
      </div>
    );
  }
}

export default App;
