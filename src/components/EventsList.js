import React from "react";
import Event from "./Event";
import Criteria from "./Criteria";
import {
  ReduxFormMaker,
  SubmissionForm
} from "../components/Form/SubmissionForm";

class EventsList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { conferences, isLoading } = this.props;
    return (
      <div>
        {isLoading
          ? null
          : conferences.map(conference => (
            <Event key={conference.id}>
              <Criteria>{conference.name}</Criteria>
            </Event>
          ))}
        {/* Form component is here for now, so we can see it in the front end */}
        <ReduxFormMaker
          name={`SubmissionForm`}
          formComponent={SubmissionForm}
        />
      </div>
    );
  }
}

export default EventsList;
