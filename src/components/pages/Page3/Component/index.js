/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Page 3

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import noop from 'lodash/noop';

import styles from './styles';

/**
 *  Page 3
 */
@cssModules(styles)
export default class extends Component {
  static displayName = 'Page3';

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    dispatch: noop,
  };

  handleDispatch = e => {
    e.preventDefault();
    this.props.dispatch({ type: 'PAGE_3_ACTION' });
  };

  render() {
    return (
      <div styleName="Page3">
        <div styleName="Page3--Content">
          <h1>Page 3</h1>
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
