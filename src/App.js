/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  App

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';
import routes from './routes';

import './styles/global';

/**
 *  App
 */
export default () => (
  <Provider store={store}>
    <Router history={syncHistoryWithStore(browserHistory, store)} routes={routes} />
  </Provider>
);
