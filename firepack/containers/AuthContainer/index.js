/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Auth Container - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Component from './Component';

import getApp from '../../selectors/app';
import getUser from '../../selectors/user';

/**
 *  Connector
 */
export default connect(
  state => ({
    app: getApp(state),
    user: getUser(state),
  })
)(withRouter(Component));
