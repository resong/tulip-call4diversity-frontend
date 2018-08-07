import React from "react";
import { Field, reduxForm } from "redux-form";
import { StyledTextField } from "./TextInput";
import Button from '@material-ui/core/Button';

export const SubmissionForm = props => (
  <form action="">
    <Field
      name="name"
      component={StyledTextField}
      type="text"
      label="Event Name"
    />
    <Field
      name="website"
      component={StyledTextField}
      type="text"
      label="Event Website"
    />
    {/* Date Picker */}
    <Field
      name="location"
      component={StyledTextField}
      type="text"
      label="Event Location"
    />
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

