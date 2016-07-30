/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Reducer - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { combineReducers } from 'redux';

import welcome from './welcome';

/**
 *  Combine Reducers
 */
export default combineReducers({
  welcome,
});
