import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Icon } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    wrapper: {
        height: '48px',
        padding: '8px',
        boxShadow: '2px 2px 4px -2px gray'
    },
    ul: {
        listStyleType: 'none',
    },
    li: {
        textAlign: 'center',
        padding: '16px',
    },
    a: {
        color: "#111"
    }
}))

export const SideMenu = (props) => {
    const classes = useStyles();
    return (
        <div className={props.className}>
            <nav>
                <ul className={classes.ul}>
                    <li className={classes.li}><a href="#" className={classes.a}><Icon fontSize='large'>extension</Icon></a></li>
                    <li className={classes.li}><a href="#" className={classes.a}><Icon fontSize='large'>find_in_page</Icon></a></li>
                    <li className={classes.li}><a href="#" className={classes.a}><Icon fontSize='large'>android</Icon></a></li>
                    <li className={classes.li}><a href="#" className={classes.a}><Icon fontSize='large'>notifications</Icon></a></li>
                    <li className={classes.li}><a href="#" className={classes.a}><Icon fontSize='large'>receipt</Icon></a></li>
                </ul>
            </nav>
        </div>

    )
}