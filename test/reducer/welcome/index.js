/* eslint-env mocha */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Welcome Reducer - Test

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import chai, { expect } from 'chai';
import chaiImmutable from 'chai-immutable';
import { fromJS } from 'immutable';

import { FIREPACK_APP } from '../../../src/constants/actionTypes.const';

import welcomeReducer from '../../../src/reducer/welcome';

chai.use(chaiImmutable);

/**
 *  Welcome Reducer - Test
 */
describe('Welcome Reducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      backgroundColor: 'white',
    });
  });

  it('should handle FIREPACK_APP.SET_BACKGROUND_COLOR action type', () => {
    const expectedState = state.set('backgroundColor', 'black');
    const action = {
      type: FIREPACK_APP.SET_BACKGROUND_COLOR,
      payload: {
        color: 'black',
      },
    };
    const newState = welcomeReducer(state, action);

    expect(newState).to.equal(expectedState);
  });

  it('should handle \'UNKNOWN\' action types', () => {
    const expectedState = state;
    const newState = welcomeReducer(state, { type: 'UNKNOWN' });

    expect(newState).to.equal(expectedState);
  });
});
