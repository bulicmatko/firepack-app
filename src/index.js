
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React from 'react';
import ReactDOM from 'react-dom';
import Firepack from 'firepack';

import ExampleApp from './apps/ExampleApp';

const Config = {
    appPath: '/',
    firebaseUrl: 'https://fifa-tracker.firebaseio.com',
    sidebarMenu: {
        title: 'Example Apps',
        links: [
            {
                _id: 'example-app',
                icon: 'rocket',
                title: 'Example App',
                route: '/apps/example-app'
            }
        ]
    }
};

/**
 *  Render App
 */
ReactDOM.render(
    <Firepack {...Config}>
        {ExampleApp({basePath: 'example-app'})}
    </Firepack>,
    document.getElementById('App')
);
