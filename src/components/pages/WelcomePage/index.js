/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Welcome Page - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { connect } from 'react-redux';
import { actions, selectors } from 'firepack';
import pick from 'lodash/pick';

import Component from './Component';

/**
 *  Connector
 */
export default connect(
  state => ({
    user: pick(
      selectors.user.getUserData(state),
      'email', 'photoURL', 'displayName'
    ),
  }),
  dispatch => ({
    onSignOut: () => (
      dispatch(actions.auth.signOut())
    ),
  })
)(Component);
