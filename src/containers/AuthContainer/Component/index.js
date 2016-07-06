/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Auth Container

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes, cloneElement } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles';

const { location } = window;

/**
 *  Auth Container
 */
@cssModules(styles)
export default class extends Component {
  static displayName = 'AuthContainer';

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children } = this.props;

    return (
      <div styleName="AuthContainer">
        <div styleName="AuthContainer--Content">
          {cloneElement(children, { key: location.pathname })}
        </div>
      </div>
    );
  }
}
