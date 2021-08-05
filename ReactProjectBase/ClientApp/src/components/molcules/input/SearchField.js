import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Icon } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    wrapper: {
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        margin: 'auto',
        left: '8px'
    },
    input: {
        height: '32px',
        paddingLeft: '48px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: 'lightgray',
        fontSize: '12px'
    }
}))

export const SearchField = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Icon className={classes.icon}>search</Icon>
            <input className={classes.input} type='text' placeholder='キーワードを検索' />
        </div>
    )
}