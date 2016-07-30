/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Action Types - Constants

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { createActionTypes } from 'firepack';

/**
 *  Firepack App Action Types
 */
export const FIREPACK_APP = createActionTypes([
  'SET_BACKGROUND_COLOR',
], '@@firepack-app');
