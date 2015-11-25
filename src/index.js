
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    App

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React from 'react';
import ReactDOM from 'react-dom';

import Firepack from 'firepack';
import TemplateApp from './apps/template/index';

// Render App
ReactDOM.render(
    <Firepack basePath="/firepack-app" firebaseUrl="https://fifa-tracker.firebaseio.com">
        {TemplateApp({basePath: 'template'})}
    </Firepack>,
    document.getElementById('Firepack')
);
