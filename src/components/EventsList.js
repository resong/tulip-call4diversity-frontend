import React, { Component } from "react";
import Event from "./Event";
import SearchBar from "./SearchBar";
import FormContainer from "./Form/FormContainer";
import PageTitle from "./PageTitle";

class EventsList extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const {
      conferences,
      filteredConferences,
      isLoading,
      hasErrors,
      filterConferences,
      searchText
    } = this.props;

    return (
      <div>
        <SearchBar
          value={searchText}
          onChange={e => filterConferences(e.target.value)}
        />
        {isLoading
          ? "Loading..."
          : hasErrors
            ? "Oops! Something went wrong"
            : conferences.length === 0
              ? "There are currently no conferences coming up. Stay tuned!"
              : searchText
                ? filteredConferences.map(conference => (
                    <Event key={conference.id} conference={conference} />
                  ))
                : conferences.map(conference => (
                    <Event key={conference.id} conference={conference} />
                  ))}
        {/* Form component is here for now, so we can see it in the front end */}
        <PageTitle name="Submit an Event" />
        <FormContainer />
      </div>
    );
  }
}

export default EventsList;
