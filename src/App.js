/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  App

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React from 'react';

import Firepack from '../firepack';

import routes from './routes';

import firebaseConfig from './firebase/config';

import menu from './config/menu';

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
