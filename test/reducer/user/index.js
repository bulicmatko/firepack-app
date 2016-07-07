/* eslint-env mocha */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  User Reducer - Test

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { expect } from 'chai';

import { APP, AUTH } from '../../../firepack/constants/actionTypes.const';

import userReducer from '../../../firepack/reducer/user';

/**
 *  User Reducer - Test
 */
describe('User Reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      isAuthenticating: false,
      isAuthenticated: false,
      data: {},
    };
  });

  it('should handle APP.SETUP action type', () => {
    const expectedState = { ...state, isAuthenticating: true };
    const newState = userReducer(state, { type: APP.SETUP });

    expect(newState).to.deep.equal(expectedState);
  });

  it('should handle AUTH.SIGN_IN_WITH_POPUP_START action type', () => {
    const expectedState = { ...state, isAuthenticating: true };
    const newState = userReducer(state, { type: AUTH.SIGN_IN_WITH_POPUP_START });

    expect(newState).to.deep.equal(expectedState);
  });

  it('should handle AUTH.SIGN_IN_WITH_POPUP_SUCCESS action type', () => {
    const expectedState = { ...state, isAuthenticating: false };
    const newState = userReducer(state, { type: AUTH.SIGN_IN_WITH_POPUP_SUCCESS });

    expect(newState).to.deep.equal(expectedState);
  });

  it('should handle AUTH.SIGN_IN_WITH_POPUP_FAIL action type', () => {
    const expectedState = { ...state, isAuthenticating: false };
    const newState = userReducer(state, { type: AUTH.SIGN_IN_WITH_POPUP_FAIL });

    expect(newState).to.deep.equal(expectedState);
  });

  it('should handle AUTH.AUTHENTICATED action type', () => {
    const data = { email: 'bulicmatko@gmail.com', displayName: 'Matko Bulic' };
    const expectedState = { ...state, isAuthenticating: false, isAuthenticated: true, data };
    const newState = userReducer(state, { type: AUTH.AUTHENTICATED, payload: data });

    expect(newState).to.deep.equal(expectedState);
  });

  it('should handle AUTH.AUTHENTICATED action type', () => {
    const expectedState = { ...state, isAuthenticating: false, isAuthenticated: false, data: {} };
    const newState = userReducer(state, { type: AUTH.UNAUTHENTICATED });

    expect(newState).to.deep.equal(expectedState);
  });

  it('should handle AUTH.SIGN_OUT_START action type', () => {
    const expectedState = { ...state, isAuthenticating: true };
    const newState = userReducer(state, { type: AUTH.SIGN_OUT_START });

    expect(newState).to.deep.equal(expectedState);
  });

  it('should handle AUTH.SIGN_OUT_SUCCESS action type', () => {
    const expectedState = { ...state, isAuthenticating: false };
    const newState = userReducer(state, { type: AUTH.SIGN_OUT_SUCCESS });

    expect(newState).to.deep.equal(expectedState);
  });

  it('should handle AUTH.SIGN_OUT_FAIL action type', () => {
    const expectedState = { ...state, isAuthenticating: false };
    const newState = userReducer(state, { type: AUTH.SIGN_OUT_FAIL });

    expect(newState).to.deep.equal(expectedState);
  });

  it('should handle \'UNKNOWN\' action types', () => {
    const expectedState = { ...state };
    const newState = userReducer(state, { type: 'UNKNOWN' });

    expect(newState).to.deep.equal(expectedState);
  });
});
