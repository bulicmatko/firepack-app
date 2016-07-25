/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Welcome - Reducer

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { fromJS } from 'immutable';
import { createReducer } from 'firepack';

/**
 *  Initial State
 */
const initState = fromJS({
  greet: false,
});

/**
 *  Reducer
 */
export default createReducer({
  HELLO: state => (
    state.set('greet', true)
  ),
}, initState);

