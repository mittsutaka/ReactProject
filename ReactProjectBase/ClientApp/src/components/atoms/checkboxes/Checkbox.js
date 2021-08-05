import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    label: {
        position: 'relative',
        paddingLeft: '24px',
        cursor: 'pointer',
        '&::before': {
            position: 'absolute',
            content: '""',
            display: 'block',
            height: '16px',
            width: '16px',
            border: '1px solid #aaa',
            borderRadius: '4px',
            top: 0,
            bottom: 0,
            margin: 'auto'
        }
    },
    input: {
        display: 'none',
    },
    span: {
        content: '""',
        borderRight: '3px solid #aaa',
        borderBottom: '3px solid #aaa',
        display: 'block',
        height: '10px',
        width: '4px',
        marginRight: '4px',
        position: 'absolute',
        transform: 'rotate(45deg)',
        top: 0,
        bottom: 0,
        margin: 'auto',
        left:'6px'
    }
}))

export const Checkbox = (props) => {
    const classes = useStyles();
    return (
        <label className={classes.label}>
            <input type='checkbox' value='true' name={props.name} className={classes.input} />
            <span className={classes.span}></span>
            {props.text}
        </label>
    )
}