import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

/**
 * Class for App Header Component
 */

const styles = theme => ({
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    gridContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    gridChild: {
        width: '100%',
        margin: 'auto'
    },
    appbar: {
    }
});

class AppHeader extends Component {



    render() {
        const { classes } = this.props;
        return (

            <AppBar position="static" color="#fff" className={classes.appbar}>
                <Grid container justify="center" className={classes.gridContainer}>
                    <Grid item md={8} xs={12} className={classes.gridChild}>
                        <Toolbar variant="dense" className={classes.toolbar}>
                            <Typography variant="title" color="primary">
                                Speak EZ
                            </Typography>
                            {/* NOTE: The button is currently being toggled based on whether the form is showing or not */}
                            { !this.props.common.displayForm
                            ?
                                <Button variant="contained" color="primary" className={classes.button} onClick={() => {this.props.conferencesHide(); this.props.formShow()}}>
                                    Submit Event
                                </Button>
                            : null }
                        </Toolbar>
                    </Grid>
                </Grid>   
            </AppBar>
 
        );
    }

}

export default withStyles(styles)(AppHeader);