/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  App

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React from 'react';

import Firepack from '../firepack';

import routes from './routes';

/**
 *  App
 */
export default () => (
  <Firepack routes={routes} />
);
