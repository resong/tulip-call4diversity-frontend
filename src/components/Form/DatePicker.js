import React from 'react';
import DateTimePicker from "react-widgets/lib/DateTimePicker";

const WrappedDateTimePicker = ({label, ...props}) => {
  const onChange = props.input.onChange;
  return <div className="form-datePicker"><span>{label}</span><DateTimePicker onChange={onChange}/></div>;
};

export default WrappedDateTimePicker;