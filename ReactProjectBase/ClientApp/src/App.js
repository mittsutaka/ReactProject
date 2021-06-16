import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

export const App = () => {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
        </Layout>
    );
}
