/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Page 2

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import noop from 'lodash/noop';

import styles from './styles';

/**
 *  Page 2
 */
@cssModules(styles)
export default class extends Component {
  static displayName = 'Page2';

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    dispatch: noop,
  };

  handleDispatch = e => {
    e.preventDefault();
    this.props.dispatch({ type: 'PAGE_2_ACTION' });
  };

  render() {
    return (
      <div styleName="Page2">
        <div styleName="Page2--Content">
          <h1>Page 2</h1>
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
