import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        color: 'black'
    }
}));

export const Layout = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            {props.children}
        </div>
    )
}
