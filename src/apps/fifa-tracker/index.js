
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Constants from './constants/Constants';

import App from './App';

import DashboardComponent from './components/DashboardComponent';
import TeamsListComponent from './components/TeamsListComponent';
import TeamDetailsComponent from './components/TeamDetailsComponent';
import PlayersListComponent from './components/PlayersListComponent';
import PlayerDetailsComponent from './components/PlayerDetailsComponent';
import MatchesListComponent from './components/MatchesListComponent';
import MatchDetailsComponent from './components/MatchDetailsComponent';
import ErrorComponent from './components/ErrorComponent';

const Style = require('./styles/main.scss');

// Define App Routes
const AppRoutes = ({baseUrl = 'fifa-tracker'}) => {

    Constants.BaseUrl = baseUrl;

    return (
        <Route path={baseUrl} component={App}>
            <IndexRoute component={DashboardComponent}/>

            <Route path="dashboard" component={DashboardComponent}/>

            <Route path="teams" component={TeamsListComponent}/>
            <Route path="teams/:slug" component={TeamDetailsComponent}/>

            <Route path="players" component={PlayersListComponent}/>
            <Route path="players/:slug" component={PlayerDetailsComponent}/>

            <Route path="matches" component={MatchesListComponent}/>
            <Route path="matches/:id" component={MatchDetailsComponent}/>

            <Route path="*" component={ErrorComponent}/>
        </Route>
    );

};

// Export AppRoutes
export default AppRoutes;
