/* eslint-env mocha */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Reducer - Test

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import chai, { expect } from 'chai';
import chaiImmutable from 'chai-immutable';
// import { fromJS } from 'immutable';

import reducer from '../../src/reducer';

chai.use(chaiImmutable);

/**
 *  Reducer - Test
 */
describe('Reducer', () => {
  // let state;

  // beforeEach(() => {
  //   state = fromJS({});
  // });

  // it('should handle APP.SETUP action type', () => {
  //   const expectedState = state;
  //   const newState = reducer(state, { type: 'DUMMY_ACTION_TYPE' });

  //   expect(newState).to.equal(expectedState);
  // });

  it('should pass the test', () => {
    expect(true).to.equal(true);
  });
});
