/* eslint-env mocha */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Index Selector - Test

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { expect } from 'chai';

import { getUser } from '../../src/selectors';

/**
 *  Index Selector - Test
 */
describe('Index Selectors', () => {
  describe('Get User Selector', () => {
    it('should get object with user data from state', () => {
      const state = {
        user: {
          email: 'bulicmatko@gmail.com',
          displayName: 'Matko Bulic',
        },
      };
      const expectedState = { user: state.user };
      const newState = getUser(state);

      expect(newState).to.deep.equal(expectedState);
    });
  });
});
