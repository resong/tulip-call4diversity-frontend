import React from "react";

import { withStyles } from '@material-ui/core/styles';

import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedInTwoTone';
import School from '@material-ui/icons/SchoolTwoTone';
import MonetizationOn from '@material-ui/icons/MonetizationOnTwoTone';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      padding: theme.spacing.unit * 2,
    },
    critTrue: {
        flex: '1 0 180px',
        marginRight: theme.spacing.unit * 2,
        display: 'flex',
        lineHeight: '24px'
    },
    critFalse: {
        flex: '1 0 180px',
        textDecoration: "line-through",
        marginRight: theme.spacing.unit * 2,
        display: 'flex',
        lineHeight: '24px'
    },
    ul: {
        listStyleType: 'none',
        display: 'flex',
        marginLeft: '0',
        paddingLeft: '0',
        flexFlow: 'row wrap'
    },
    icon: {
        marginRight: theme.spacing.unit,
    }
  });

const Criteria = (props) => {
    const { classes } = props;
    const { compensation, codeOfConduct, scholarship } = props.conference;
    const strike = (prop) => prop === true ? classes.critTrue : classes.critFalse;
        return (
            <ul className={classes.ul}>
                <li className={strike(compensation)}>
                    <MonetizationOn className={classes.icon}/> Compensation
                </li>
                <li className={strike(codeOfConduct)}>
                    <AssignmentTurnedIn className={classes.icon}/> Code Of Conduct
                </li>
                <li className={strike(scholarship)}>
                    <School className={classes.icon}/> Diversity Scholarship
                </li>
            </ul>
        );
    }
export default withStyles(styles)(Criteria);