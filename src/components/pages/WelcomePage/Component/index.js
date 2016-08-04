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
          <p>
            The <i>sign in/up</i> form and <i>social media sign-on</i> you just saw,
            that was <a href="https://github.com/bulicmatko/firepack" target="_blank">Firepack</a>.
            Simple authentication wrapper for your application built with <a href="https://facebook.github.io/react/" target="_blank">React</a>, <a href="https://github.com/reactjs/react-router" target="_blank">React router</a> and <a href="http://redux.js.org/" target="_blank">Redux</a>.
          </p>
          <p>
            What you see now is a simple welcome screen only accessible to authenticated users.
            From here you can start building your <a href="https://firebase.google.com/" target="_blank">Firebase</a> application without thinking about authentication.
            At least for now.
            After your app is ready, feel free to just unwrap it and implement custom auth solution.
          </p>
          <p>
            <a href="https://github.com/bulicmatko/firepack" target="_blank">Firepack</a> and <a href="https://github.com/bulicmatko/firepack-app" target="_blank">Firepack App</a> on <b>GitHub</b>
          </p>
          <button onClick={this.handleSignOut}>
            Sign out
          </button>
        </div>
      </div>
    );
  }
}
