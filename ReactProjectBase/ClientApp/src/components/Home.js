import { Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { TextButton } from './atoms/buttons/TextButton';

const useStyles = makeStyles(() => ({
    buttonWrapper: {
        marginBottom: '8px'
    }
}))

export const Home = (props) => {
    const classes = useStyles();
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1);
    }

    const subCount = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <div className={classes.buttonWrapper}>
                <TextButton onClick={addCount} variant="primary" text="加算する" />
            </div>
            <div className={classes.buttonWrapper}>
                <TextButton onClick={subCount} variant="secondary" text="減算する" />
            </div>
            {count}
            <Icon>add</Icon>
            {/*<SearchField />*/}
            <Link to='/'>Flow</Link>
        </div>
    );
}
