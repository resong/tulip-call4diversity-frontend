import React from "react";

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  grid: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 'auto'
  },
});

const PageContent = (props) => {
  const { classes } = props;
    return <Grid md={8} xs={12} className={classes.grid}>
      {props.children}
    </Grid>;
}

export default withStyles(styles)(PageContent);
