/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  User - Reducer

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { APP, AUTH } from '../../constants/actionTypes.const';

/**
 *  Initial State
 */
const initState = {
  isAuthenticating: false,
  isAuthenticated: false,
  data: {},
};

/**
 *  User - Reducer
 */
export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case APP.SETUP:
      return { ...state, isAuthenticating: true };

    case AUTH.SIGN_IN_WITH_POPUP_START:
      return { ...state, isAuthenticating: true };
    case AUTH.SIGN_IN_WITH_POPUP_SUCCESS:
      return { ...state, isAuthenticating: false };
    case AUTH.SIGN_IN_WITH_POPUP_FAIL:
      return { ...state, isAuthenticating: false };

    case AUTH.AUTHENTICATED:
      return { ...state, isAuthenticating: false, isAuthenticated: true, data: payload };
    case AUTH.UNAUTHENTICATED:
      return { ...state, isAuthenticating: false, isAuthenticated: false, data: {} };

    case AUTH.SIGN_OUT_START:
      return { ...state, isAuthenticating: true };
    case AUTH.SIGN_OUT_SUCCESS:
      return { ...state, isAuthenticating: false };
    case AUTH.SIGN_OUT_FAIL:
      return { ...state, isAuthenticating: false };

    default:
      return state;
  }
};
