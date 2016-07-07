/* eslint-env mocha */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  User Selector - Test

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { expect } from 'chai';

import userSelector from '../../../firepack/selectors/user';

/**
 *  User Selector - Test
 */
describe('User Selector', () => {
  it('should get user object from state', () => {
    const state = {
      user: {
        email: 'bulicmatko@gmail.com',
        displayName: 'Matko Bulic',
      },
    };
    const expectedState = state.user;
    const newState = userSelector(state);

    expect(newState).to.deep.equal(expectedState);
  });
});
