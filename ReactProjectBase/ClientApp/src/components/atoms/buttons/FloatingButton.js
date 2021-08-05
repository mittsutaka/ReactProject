import React from 'react';
import { Fab, Icon } from '@material-ui/core';

export const FloatingButton = (props) => {
    return (
        <Fab size='small'>
            <Icon fontSize='small' style={{ color: props.iconColor }}>{props.icon}</Icon>
        </Fab>
    )
}

