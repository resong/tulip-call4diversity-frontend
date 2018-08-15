import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export const renderRadioButtonGroup = (type, label) => ({ input, ...rest }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel>{label}</FormLabel>
      <RadioGroup
        aria-label={type}
        name={type}
        value={input.value}
        onChange={(event, value) => input.onChange(value)}
      >
        <FormControlLabel 
          value="yes" 
          control={<Radio color="#000" />} 
          label="yes"
        />
        <FormControlLabel 
          value="no" 
          control={<Radio color="#000" />} 
          label="no"
        />
      </RadioGroup>
    </FormControl>
  );
};
