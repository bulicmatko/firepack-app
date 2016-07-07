/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  App - Reducer

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { APP } from '../../constants/actionTypes.const';

/**
 *  Initial State
 */
const initState = {
  isReady: false,
};

/**
 *  App - Reducer
 */
export default (state = initState, action) => {
  const { type } = action;

  switch (type) {
    case APP.SETUP:
      return { ...state, isReady: true };

    default:
      return state;
  }
};
