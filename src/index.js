
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    App

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React from 'react';
import ReactDOM from 'react-dom';

import Firepack from 'firepack';

import TemplateAppRouter from './apps/template/Router';

const FirepackConfig = {
    basePath: '/',
    firebaseUrl: 'https://fifa-tracker.firebaseio.com',
    apps: [
        {
            _id: 'template',
            icon: 'rocket',
            title: 'Template',
            route: '/apps/template'
        }
    ]
};

ReactDOM.render(
    <Firepack {...FirepackConfig}>

        {TemplateAppRouter({basePath: 'template'})}

    </Firepack>,
    document.getElementById('Firepack')
);
