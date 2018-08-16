import React, { Component } from "react";

import "./App.css";
import CssBaseline from '@material-ui/core/CssBaseline';

// Custom components
import PageContent from "./components/PageContent";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import PageTitle from "./components/PageTitle";
import FormContainer from "./components/Form/FormContainer";
import EventsContainer from "./containers/EventsContainer";



class App extends Component {

  componentDidUpdate() {

  }


  render() {

    const {
      common,
      formShow,
      conferencesHide,
      conferencesShow,
    } = this.props;

    return (
      <div>
        <CssBaseline />
        {/* TODO: Pass button status down from common state - can use showButton or !showForm */}
        <AppHeader conferencesHide={conferencesHide} formShow={formShow} common={common}/>

        {/* TODO: Once common state is working, uncomment the props below and it should work (can't test so it might not work, but theoretically it should) */}
        <PageContent>
            
            {  this.props.common.displayLoading 
              ?
              <div>
                <PageTitle name="Loading..." />
                {/* Placeholder for loading component of the future */}
              </div>
              : null
            }

            { this.props.common.displayConferences 

              ? 
              <div>
                <PageTitle name="Upcoming Events" />
                <EventsContainer conferencesShow={conferencesShow} />
              </div>
              : null
            }

            { this.props.common.displayForm 
              ? 
              <div>
                <PageTitle name="Submit an Event" />
                <FormContainer onSubmit={this.props.addNewConference} />
              </div>
              : null
            }


        </PageContent>
        
        <AppFooter />

      </div>
    );
  }
}

export default App;
