import React from "react";
import { Field, reduxForm } from "redux-form";
import Button from '@material-ui/core/Button';
import StyledTextField from "./TextInput";

import "react-widgets/dist/css/react-widgets.css";
import Moment from "moment";
import momentLocalizer from "react-widgets-moment";
import Divider from "@material-ui/core/Divider";
import conferences from "../../api/conferences";
import WrappedDateTimePicker from './DatePicker';
import { renderRadioButtonGroup } from "./RadioButton";

import './FormStyles.css';

Moment.locale("en");
momentLocalizer();

const compensation = "compensation";
const codeOfConduct = "codeOfConduct";
const scholarship = "scholarship";

export const SubmissionForm = props => (
  <form action="" onSubmit={props.handleSubmit}>
    <div className="form-block">
      <Field
        name="name"
        component={StyledTextField}
        type="text"
        label="Event Name"
      />
      <Field
        name="url"
        component={StyledTextField}
        type="url"
        label="Event Website"
      />
      <Field 
        name="startDate" 
        label="Event Date" 
        component={WrappedDateTimePicker} 
      />
      <Field
        name="city"
        component={StyledTextField}
        type="text"
        label="Event Location"
      />
      <Divider />
    </div>
    
    <div className="form-block">
      <Field 
        name="submissionDueDate" 
        label="Submission Due Date" 
        component={WrappedDateTimePicker} 
      />
      <Field
        name="submissionUrl"
        component={StyledTextField}
        label="Submission Website"
      />
      <Field
        name={compensation}
        component={renderRadioButtonGroup(
          compensation,
          "Are all speakers compensated at your event?"
        )}
      />
      <Field
        name={codeOfConduct}
        component={renderRadioButtonGroup(
          codeOfConduct,
          "Does your event have a publicly visible code of conduct?"
        )}
      />
      <Field
        name={scholarship}
        component={renderRadioButtonGroup(
          scholarship,
          "Does your event provide diversity scholarships?"
        )}
      />
      <Divider />
    </div>

    <div className="form-block">
      <Field
        name="contactName"
        component={StyledTextField}
        type="text"
        label="Contact Name"
      />
      <Field
        name="contactEmail"
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
      color="secondary"
    >
      Clear Values
    </Button>
  </form>
);

const onSubmit = values => {
  conferences.postSubmissionForm(values);
};

export default reduxForm({ form: "SubmissionForm", onSubmit })(SubmissionForm);
