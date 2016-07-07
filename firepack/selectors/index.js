/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Selectors - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { createSelector } from 'reselect';

import appSelector from './app';
import userSelector from './user';

/**
 *  Get User
 */
export const getApp = createSelector(
  appSelector,
  app => ({ app })
);

/**
 *  Get User
 */
export const getUser = createSelector(
  userSelector,
  user => ({ user })
);
