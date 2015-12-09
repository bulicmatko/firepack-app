
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Example App - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Error404 from './components/Error404';

import config from './config';

const { appBasePath } = config;

/**
 *  Route Constructor
 */
export default ({ basePath = appBasePath, onEnter = _.noop }) => {
    return (
        <Route path={basePath} component={Layout}>
            <IndexRoute onEnter={onEnter} component={Dashboard}/>

            <Route path="dashboard" onEnter={onEnter} component={Dashboard}/>

            <Route path="*" onEnter={onEnter} component={Error404}/>
        </Route>
    );
};
