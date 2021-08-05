import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Icon } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    wrapper: {
        width: '100%',
        padding: '8px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    tab: {
        borderBottom: '3px solid #6200ee',
        padding:'0 16px'
    }
}))

export const HeadTabs = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.tab}>フロートップ</div>
            <div>下書き</div>
            <div>お気に入り</div>
        </div>
    )
}