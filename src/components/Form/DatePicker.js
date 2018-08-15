import React from 'react';
import DateTimePicker from "react-widgets/lib/DateTimePicker";

const WrappedDateTimePicker = ({label, ...props}) => {
  const onChange = props.input.onChange;
  return <div>{label}<DateTimePicker onChange={onChange}/></div>;
};

// export default withStyles(styles)(WrappedDateTimePicker);
export default WrappedDateTimePicker;