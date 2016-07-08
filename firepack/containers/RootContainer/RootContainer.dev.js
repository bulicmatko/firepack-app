/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Root Container (Development)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes, cloneElement } from 'react';
import cssModules from 'react-css-modules';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import firebase from 'firebase';
import noop from 'lodash/noop';

import DevTools from '../../components/dev/DevTools';

import route from '../../utils/route.util';

import styles from './styles';

import { APP, AUTH } from '../../constants/actionTypes.const';

const { location } = window;

/**
 *  Root Container
 */
@cssModules(styles)
class RootContainer extends Component {
  static displayName = 'RootContainer';

  static propTypes = {
    user: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    user: {},
    router: {},
    dispatch: noop,
    children: null,
  };

  componentWillMount() {
    const { router, dispatch } = this.props;

    dispatch({ type: APP.SETUP });

    firebase.initializeApp({
      apiKey: 'AIzaSyAl-Gv0I61NRmKa5hVH69-IsZSwfG6WQrA',
      authDomain: 'firepack-app.firebaseapp.com',
      databaseURL: 'https://firepack-app.firebaseio.com',
      storageBucket: 'firepack-app.appspot.com',
    });

    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          dispatch({
            type: AUTH.AUTHENTICATED,
            payload: {
              uid: user.uid,
              email: user.email,
              photoURL: user.photoURL,
              displayName: user.displayName,
              isAnonymous: user.isAnonymous,
              emailVerified: user.emailVerified,
            },
          });

          if (location.pathname.startsWith(route('auth'))) {
            router.replace({ pathname: route('dashboard') });
          }
        } else {
          dispatch({ type: AUTH.UNAUTHENTICATED });

          if (!location.pathname.startsWith(route('auth'))) {
            router.replace({ pathname: route('auth') });
          }
        }
      });
  }

  render() {
    const { user, children } = this.props;

    return (
      <div styleName="RootContainer">
        <div styleName="RootContainer--Content">
          {
            user.isAuthenticating
            ? <div styleName="loading-screen">Please wait...</div>
            : cloneElement(children, { key: location.pathname })
          }
        </div>
        <DevTools />
      </div>
    );
  }
}

/**
 *  Connector
 */
export default connect(
  state => state,
  dispatch => ({
    dispatch: action => dispatch(action),
  })
)(withRouter(RootContainer));
