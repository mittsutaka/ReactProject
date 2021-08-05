import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    tab: {
        padding: '0 16px',
        textAlign:'center'
    },
    selected: {
        borderBottom: '3px solid #6200ee',
    }
}))

export const Tab = (props) => {
    const classes = useStyles();
    return (
        <div className={`${classes.tab} ${props.isSelected ? classes.selected : ""}`}>{props.text}</div>
    )
}