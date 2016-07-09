/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  App

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React from 'react';

import Firepack from '../firepack';

import routes from './routes';

import firebaseConfig from './firebase/config';

const menu = [
  {
    title: 'Firepack App',
    links: [
      {
        icon: 'home',
        title: 'Home Page',
        route: '/app',
      },
      {
        icon: 'file',
        title: 'Page 1',
        route: '/app/page-1',
      },
      {
        icon: 'file',
        title: 'Page 2',
        route: '/app/page-2',
      },
    ],
  },
];

/**
 *  App
 */
export default () => (
  <Firepack
    firebaseConfig={firebaseConfig}
    routes={routes}
    menu={menu}
  />
);
