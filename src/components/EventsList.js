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

                <SubmissionForm /> 
                <Criteria>{conference.name}</Criteria>
                <ReduxFormMaker
                  name={`conference_${conference.name}`}
                  formComponent={SubmissionForm}
                />
              </Event>
            ))}
      </div>
    );
  }
}

export default EventsList;
