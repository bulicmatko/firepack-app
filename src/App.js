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

import './styles/global'; // eslint-disable-line

/**
 *  App
 */
export default () => (
  <Firepack
    appTitle="Firepack App"
    appDescription="Kickstart your Firepack application development"
    routes={routes}
    reducer={reducer}
    firebaseConfig={firebaseConfig}
    firebaseAuthProviders={firebaseAuthProviders}
  />
);
