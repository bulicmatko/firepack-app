/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Dashboard Page

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import noop from 'lodash/noop';

import styles from './styles';

/**
 *  Dashboard Page
 */
@cssModules(styles)
export default class extends Component {
  static displayName = 'DashboardPage';

  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
      photoURL: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
    }).isRequired,
    onSignOut: PropTypes.func.isRequired,
  };

  static defaultProps = {
    user: {
      email: '',
      photoURL: '',
      displayName: '',
    },
    onSignOut: noop,
  };

  handleSignOut = e => {
    e.preventDefault();
    this.props.onSignOut();
  };

  render() {
    const { user } = this.props;

    return (
      <div styleName="DashboardPage">
        <div styleName="DashboardPage--Content">
          <img src={user.data.photoURL} alt={user.data.displayName} />
          <h1>{user.data.displayName}</h1>
          <p>{user.data.email}</p>
          <button onClick={this.handleSignOut}>
            Sign out
          </button>
        </div>
      </div>
    );
  }
}
