import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
});

const PageTitle = (props) => {
    return(
        <Typography variant="headline" gutterBottom>{ props.name }</Typography>
    );
}

export default withStyles(styles)(PageTitle);