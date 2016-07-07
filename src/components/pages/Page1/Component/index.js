/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Page 1

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import noop from 'lodash/noop';

import styles from './styles';

/**
 *  Page 1
 */
@cssModules(styles)
export default class extends Component {
  static displayName = 'Page1';

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    dispatch: noop,
  };

  handleDispatch = e => {
    e.preventDefault();
    this.props.dispatch({ type: 'PAGE_1_ACTION' });
  };

  render() {
    return (
      <div styleName="Page1">
        <div styleName="Page1--Content">
          <h1>Page 1</h1>
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
