import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  bootstrapRoot: {
    padding: 0,
    width: 300,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#5C68A7',
      boxShadow: '0 0 0 0.2rem RGBA(41, 60, 167, 0.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: 0.5,
    color: '#0D0D0D',
    '&:focus': {
      color: '#293CA7'
    },
  },
});

const TextInput = (props) => {
  const { classes } = props;

  return (
    <TextField
      type='text'
      margin='normal'
      label={props.label}
      placeholder={props.placeholder}
      InputProps={{
        disableUnderline: true,
        classes: {
          root: classes.bootstrapRoot,
          input: classes.bootstrapInput
        }
      }}
      InputLabelProps={{
        shrink: true,
        className: classes.bootstrapFormLabel
      }}
    />
  );
};

export default withStyles(styles)(TextInput);
