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

Moment.locale("en");
momentLocalizer();

const compensation = "compensation";
const codeOfConduct = "codeOfConduct";
const scholarship = "scholarship";

// const required = value => value ? undefined : 'Required';
// const maxLength = max => value =>
//   value && value.length > max ? `Must be ${max} characters or less` : undefined;
// const maxLength15 = maxLength(15);
// const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
// const minValue = min => value =>
//   value && value < min ? `Must be at least ${min}` : undefined
// const minValue18 = minValue(18)
// const email = value =>
//   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
//     'Invalid email address' : undefined
// const tooOld = value =>
//   value && value > 65 ? 'You might be too old for this' : undefined
// const aol = value =>
//   value && /.+@aol\.com/.test(value) ?
//     'Really? You still use AOL for your email?' : undefined

// const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       <input {...input} placeholder={label} type={type} />
//       {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
//     </div>
//   </div>
// )

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
      {/* Date Picker */}
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
      {/* Date Picker */}
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
