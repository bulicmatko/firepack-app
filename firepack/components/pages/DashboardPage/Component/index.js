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
      email: PropTypes.string,
      photoURL: PropTypes.string,
      displayName: PropTypes.string,
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
          <img src={user.photoURL} alt={user.displayName} />
          <h1>{user.displayName}</h1>
          <p>{user.email}</p>
          <button onClick={this.handleSignOut}>
            Sign out
          </button>
        </div>
      </div>
    );
  }
}
