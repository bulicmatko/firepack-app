/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Welcome Page

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import noop from 'lodash/noop';

import styles from './styles'; // eslint-disable-line

/**
 *  Welcome Page
 */
@cssModules(styles)
export default class extends Component {
  static displayName = 'WelcomePage';

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
      <div styleName="WelcomePage">
        <div styleName="WelcomePage--Content">
          {user.photoURL && (
            <img src={user.photoURL} alt={user.displayName} />
          )}
          {user.displayName && (
            <h1>{user.displayName}</h1>
          )}
          {user.email && (
            <p>{user.email}</p>
          )}
          <button onClick={this.handleSignOut}>
            Sign out
          </button>
        </div>
      </div>
    );
  }
}
