import React, { Component } from "react";

import "./App.css";

// Custom components
import AppHeader from "./components/AppHeader";
import AppTitle from "./components/AppTitle";
import Button from "./components/Button";
import PageTitle from "./components/PageTitle";

import EventsContainer from "./containers/EventsContainer";

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader>
          <AppTitle name="Call for Diversity" />
          <Button name="Submit Event" />
        </AppHeader>
        <section>
          <PageTitle name="Upcoming Events" />
          <EventsContainer />
        </section>
      </div>
    );
  }
}

export default App;
