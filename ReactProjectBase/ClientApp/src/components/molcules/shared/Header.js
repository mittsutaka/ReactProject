import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    header: {
        height:'48px',
        padding: '8px',
        boxShadow:'2px 2px 4px -2px gray'
    }
}))

export const Header = (props) => {
    const classes = useStyles();
    return (
        <header className={classes.header}></header>
    )
}