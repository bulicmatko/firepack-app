
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Router

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './Layout';
import DashboardComponent from './components/Dashboard';
import ErrorComponent from './components/Error';

/**
 *  Router
 */
const Router = ({basePath = 'todo-app', onEnter = _.noop}) => {
    return (
        <Route path={basePath} onEnter={onEnter} component={Layout}>
            <IndexRoute onEnter={onEnter} component={DashboardComponent}/>

            <Route path="dashboard" onEnter={onEnter} component={DashboardComponent}/>

            <Route path="*" onEnter={onEnter} component={ErrorComponent}/>
        </Route>
    );
};

// Export Router
export default Router;
