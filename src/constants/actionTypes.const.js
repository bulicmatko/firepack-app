/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Action Types - Constants

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { createActionTypes } from 'firepack';

/**
 *  Firepack App Action Types
 */
export const FIREPACK_APP = createActionTypes([
  'ACTION_TYPE_NAME',
], '@@firepack-app');
