/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Reducer - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';

/**
 *  Combine Reducers
 */
export default combineReducers({
  routing: routerReducer,
  user,
});
