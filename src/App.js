/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  App

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React from 'react';
import Firepack from 'firepack';

import routes from './routes';
import reducer from './reducer';

import firebaseConfig from './firebase/config';
import firebaseAuthProviders from './firebase/authProviders';

import './styles/global';

/**
 *  App
 */
export default () => (
  <Firepack
    routes={routes}
    reducer={reducer}
    firebaseConfig={firebaseConfig}
    firebaseAuthProviders={firebaseAuthProviders}
  />
);
