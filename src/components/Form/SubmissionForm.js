import React from "react";
import { Field, reduxForm } from "redux-form";
import { StyledTextField } from "./TextInput";

export const SubmissionForm = props => (
  <form action="">
    <Field
      name="firstName"
      component={StyledTextField}
      type="text"
      label="First Name"
    />
  </form>
);

export const ReduxFormMaker = ({ name, formComponent, ...restProps }) => {
  const MyForm = reduxForm({ form: name })(formComponent);
  return <MyForm {...restProps} />;
};

