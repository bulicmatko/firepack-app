/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Auth Page - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { connect } from 'react-redux';

import AuthPage from './Component';

import signInWithPopup from '../../../actions/auth/signInWithPopup.action';

/**
 *  Connector
 */
export default connect(
  state => state,
  dispatch => ({
    onSignInWithFacebook: () => dispatch(signInWithPopup('Facebook')),
    onSignInWithTwitter: () => dispatch(signInWithPopup('Twitter')),
    onSignInWithGoogle: () => dispatch(signInWithPopup('Google')),
    onSignInWithGithub: () => dispatch(signInWithPopup('Github')),
  })
)(AuthPage);
