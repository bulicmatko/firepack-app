
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Firepack App - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React from 'react';
import ReactDOM from 'react-dom';
import Firepack from 'firepack';

import ExampleApp from './apps/ExampleApp';

import config from './config';

/**
 *  Render App
 */
ReactDOM.render(
    <Firepack {...config}>
        {ExampleApp({basePath: 'example-app'})}
    </Firepack>,
    document.getElementById('App')
);
