
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React from 'react';
import ReactDOM from 'react-dom';
import Firepack from 'firepack';

import Config from './Config';

import ExampleAppRouter from './apps/example-app/Router';

/**
 *  Render App
 */
ReactDOM.render(
    <Firepack {...Config}>
        {ExampleAppRouter({basePath: 'example-app'})}
    </Firepack>,
    document.getElementById('App')
);
