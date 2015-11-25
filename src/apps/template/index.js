
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Constants from './constants/Constants';

import App from './App';
import DashboardComponent from './components/DashboardComponent';
import ErrorComponent from './components/ErrorComponent';

// Define App Routes
const AppRoutes = ({baseUrl = 'fifa-tracker'}) => {

    Constants.BaseUrl = baseUrl;

    return (
        <Route path={baseUrl} component={App}>
            <IndexRoute component={DashboardComponent}/>

            <Route path="dashboard" component={DashboardComponent}/>

            <Route path="*" component={ErrorComponent}/>
        </Route>
    );

};

// Export AppRoutes
export default AppRoutes;
