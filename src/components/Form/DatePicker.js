import React from 'react';
import DatePicker from "react-widgets/lib/DatePicker";

const WrappedDatePicker = ({label, ...props}) => {
  const onChange = props.input.onChange;

  return <div>{label}<DatePicker onChange={onChange}/></div>;
};

export default WrappedDatePicker;
