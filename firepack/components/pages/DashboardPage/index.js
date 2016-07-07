/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Dashboard Page - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { connect } from 'react-redux';

import DashboardPage from './Component';

import getUser from '../../../selectors/user';

import signOut from '../../../actions/auth/signOut.action';

/**
 *  Connector
 */
export default connect(
  state => ({ user: getUser(state) }),
  dispatch => ({
    onSignOut: () => dispatch(signOut()),
  })
)(DashboardPage);
