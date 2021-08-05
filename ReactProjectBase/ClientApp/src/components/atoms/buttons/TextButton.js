import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    primary: {
        backgroundColor: '#6200ee',
        color: 'white',
    },
    secondary: {
        backgroundColor: 'lightgray',
        color: '#9d9d9d',
    },
    common: {
        border: 'none',
        padding: '8px 32px',
        borderRadius: '4px',
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.8
        }
    }
}))

export const TextButton = (props) => {
    const classes = useStyles();
    let buttonClass = 'primary';
    switch (props.variant) {
        case 'secondary':
            buttonClass = classes.secondary;
            break;
        default:
            buttonClass = classes.primary;
    }

    return (
        <button onClick={props.onClick} className={`${buttonClass} ${classes.common}`}>{props.text}</button>
    )
}