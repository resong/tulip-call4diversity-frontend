import React, { Component } from "react";

import "./App.css";
import CssBaseline from '@material-ui/core/CssBaseline';

// Custom components
import PageContent from "./components/PageContent";
import AppHeader from "./components/AppHeader";
import PageTitle from "./components/PageTitle";

import EventsContainer from "./containers/EventsContainer";

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <AppHeader />
        <PageContent>
          <PageTitle name="Upcoming Events" />
          <EventsContainer />
        </PageContent>
      </div>
    );
  }
}

export default App;
