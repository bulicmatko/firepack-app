/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Home Page

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import noop from 'lodash/noop';

import styles from './styles';

/**
 *  Home Page
 */
@cssModules(styles)
export default class extends Component {
  static displayName = 'HomePage';

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    dispatch: noop,
  };

  handleDispatch = e => {
    e.preventDefault();
    this.props.dispatch({ type: 'HOME_PAGE_ACTION' });
  };

  render() {
    return (
      <div styleName="HomePage">
        <div styleName="HomePage--Content">
          <h1>Home Page</h1>
          <p>
            <button onClick={this.handleDispatch}>
              Dispatch!
            </button>
          </p>
        </div>
      </div>
    );
  }
}
