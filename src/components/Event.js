import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

import Criteria from './Criteria';

//TODO - finish proper date formatting
// const timestampFormatter = (timestamp) => {
//   const date = new Date(timestamp);
//   return `${date.toUTCString()}`
// }

// TODO - add a location string assembler function once backend loading

// TODO - fix links/routing

// TODO - add created date to top right corner of event

// TODO - correct props object once DB model is finalized

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3
  },
  eventLink: {
    textDecoration: 'none'
  }
});

const Event = props => {
  const { classes } = props;
  const {
    name,
    city,
    // state,
    // country,
    eventDate,
    submissionUrl,
    submissionDueDate
  } = props.conference;

  const dateToFormat = date => {
    if (date && date.length > 0 && date !== '') {
      return moment(date).format('LL');
    } else {
      return 'Check event details for dates';
    }
  };
  
  // TODO: for when location is refactored into separate things
  // const locationToFormat = ({city, state, country}) => {
  //   if ( city && state && country  ) {
  //     return `${city}, ${state}, ${country}`
  //   } else if ( state && country) {
  //     return `${state}, ${country}`
  //   } else if ( city && country) {
  //     return `${city}, ${country}`
  //   } else {
  //     return `Check event details for location`
  //   }
  // };

  return (

    <Paper className={classes.root}>
      <Typography variant="title" color="primary" gutterBottom>
        <a className={classes.eventLink} target="_blank" href={submissionUrl}>
          {name}
        </a>
      </Typography>
      <Typography variant="subheading">
      {/* TODO: Refactor location comma parsing thing */}
        {dateToFormat(eventDate)} • {city}
      </Typography>
      <Typography color="#040411">
        Submission Due Date: {dateToFormat(submissionDueDate)}
      </Typography>
      <Criteria conference={props.conference} />
    </Paper>
  );
};

export default withStyles(styles)(Event);
