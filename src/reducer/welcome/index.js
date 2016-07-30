/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Welcome - Reducer

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { fromJS } from 'immutable';
import { createReducer } from 'firepack';

import { FIREPACK_APP } from '../../constants/actionTypes.const';

/**
 *  Initial State
 */
const initState = fromJS({
  backgroundColor: 'white',
});

/**
 *  Reducer
 */
export default createReducer({
  [FIREPACK_APP.SET_BACKGROUND_COLOR]: (state, payload) => (
    state.set('backgroundColor', payload.color)
  ),
}, initState);

