import React, { Component } from "react";
import Event from "./Event";
import FormContainer from "./Form/FormContainer";
import PageTitle from "./PageTitle";


class EventsList extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { conferences, isLoading, hasErrors } = this.props;

    return (
      <div>
        {isLoading
          ? "Loading..."
          : hasErrors
            ? "Oops! Something went wrong"
            : conferences.length === 0
              ? "There are currently no conferences coming up. Stay tuned!"
              : conferences.map(conference => (
                <Event key={'event_' + conference.id} conference={conference} />
              ))
        }
        {/* Form component is here for now, so we can see it in the front end */}
        <PageTitle name="Submit an Event" />
        <FormContainer />
      </div>
    );
  }
}

export default EventsList;
