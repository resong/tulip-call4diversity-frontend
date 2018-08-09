import React from "react";

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
    marginBottom: theme.spacing.unit * 3,
  },
  eventLink: {
    textDecoration: 'none'
  }
});



const Event = (props) => {
  const { classes } = props;
  const { name, city, state, country, eventDate, websiteUrl } = props.conference;
  // const { name, location, eventDate, websiteUrl } = props.conference;
  return (
    <Paper className={classes.root}>
      <Typography variant="title" color="primary" gutterBottom><a className={classes.eventLink} target="_blank" href={websiteUrl}> {name}</a></Typography>
      <Typography variant="subheading" > {eventDate}  •  {city}, {state}, {country} </Typography>
      {/* <Typography variant="subheading" > {timestampFormatter(date)}  •  {location} </Typography> */}
      <Criteria conference={props.conference} />
    </Paper>
  );
}

export default withStyles(styles)(Event);