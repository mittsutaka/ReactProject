import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './components/Home';
import Flow from './components/pages/flow/Index';

export const App = () => {
    return (
        <>
            <Route exact path='/' component={Flow} />
            <Route path='/count' component={Home} />
        </>
    );
}
