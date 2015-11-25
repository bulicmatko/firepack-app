
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    App

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React from 'react';
import ReactDOM from 'react-dom';

import Firebox from '../node_modules/firebox/src/Main';
import FifaTrackerApp from './fifa-tracker/index';

// Render App
ReactDOM.render(
    <Firebox>
        {FifaTrackerApp({baseUrl: 'fifa-tracker'})}
    </Firebox>,
    document.getElementById('Firebox')
);
