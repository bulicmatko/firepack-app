/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Page 3 - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { connect } from 'react-redux';

import Component from './Component';

/**
 *  Connector
 */
export default connect(
  state => state,
  dispatch => ({ dispatch })
)(Component);
