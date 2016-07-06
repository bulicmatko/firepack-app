/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Selectors - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { createSelector } from 'reselect';

import userSelector from './user';

/**
 *  Get User
 */
export const getUser = createSelector(
  userSelector,
  user => ({ user })
);
