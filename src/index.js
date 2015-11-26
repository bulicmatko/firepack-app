
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React from 'react';
import ReactDOM from 'react-dom';
import Firepack from 'firepack';

import ExampleAppRouter from './apps/example-app/Router';

const FirepackConfig = {
    basePath: '/',
    firebaseUrl: 'https://fifa-tracker.firebaseio.com',
    appsList: [
        {
            _id: 'example-app',
            icon: 'rocket',
            title: 'Example App',
            route: 'example-app'
        }
    ]
};

ReactDOM.render(
    <Firepack {...FirepackConfig}>
        {ExampleAppRouter({basePath: 'example-app'})}
    </Firepack>,
    document.getElementById('App')
);
