import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import ReduxFormMaker from "./SubmissionForm";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3,
  },
  eventLink: {
    textDecoration: 'none'
  }
});

const FormContainer = props => {
  const { classes, onSubmit } = props;
  return (
    <Paper className={classes.root}>
      <ReduxFormMaker onSubmit={onSubmit}  />
    </Paper>
  );
}

export default withStyles(styles)(FormContainer);
