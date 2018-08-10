import React from "react";
import { Field, reduxForm } from "redux-form";

import StyledTextField from "./TextInput";

import "react-widgets/dist/css/react-widgets.css";
import Moment from "moment";
import momentLocalizer from "react-widgets-moment";
import DateTimePicker from "react-widgets/lib/DateTimePicker";

import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

Moment.locale("en");
momentLocalizer();

export const SubmissionForm = props => (
  <form action="">
    <div className="form-block">
      <Field
        name="event-name"
        component={StyledTextField}
        type="text"
        label="Event Name"
      />
      <Field
        name="event-website"
        component={StyledTextField}
        type="url"
        label="Event Website"
      />
      {/* Date Picker */}
      {/* testing */}
      <DateTimePicker />
      <Field
        name="event-location"
        component={StyledTextField}
        type="text"
        label="Event Location"
      />
      <Divider />
    </div>
    <div className="form-block">
      {/* Date Picker */}
      {/* testing */}
      <DateTimePicker />
      <Field
        name="sub-website"
        component={StyledTextField}
        type="url"
        label="Submission Website"
      />
      {/* Radio */}
      {/* Radio */}
      {/* Radio */}
      <Divider />
    </div>
    <div className="form-block">
      <Field
        name="name"
        component={StyledTextField}
        type="text"
        label="Contact Name"
      />
      <Field
        name="email"
        component={StyledTextField}
        type="email"
        label="Contact Email"
      />
      <Divider />
    </div>
    <Button
      type="submit"
      disabled={props.pristine || props.submitting}
      variant="contained"
      color="primary"
    >
      Submit Event
    </Button>
    <Button 
      type="button"
      disabled={props.pristine || props.submitting}
      onClick={props.reset}
      variant="contained"
      color="grey"
    >
      Clear Values
    </Button>
  </form>
);

export const ReduxFormMaker = ({ name, formComponent, ...restProps }) => {
  const MyForm = reduxForm({ form: name })(formComponent);
  return <MyForm {...restProps} />;
};
