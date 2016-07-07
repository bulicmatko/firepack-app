/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Root Container

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes, cloneElement } from 'react';
import cssModules from 'react-css-modules';

import Menu from '../../components/shared/Menu';

import styles from './styles';

const { location } = window;

/**
 *  Root Container
 */
@cssModules(styles)
export default class extends Component {
  static displayName = 'RootContainer';

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children } = this.props;

    return (
      <div styleName="RootContainer">
        <div styleName="RootContainer--Topbar">
          <Menu />
        </div>
        <div styleName="RootContainer--Content">
          {cloneElement(children, { key: location.pathname })}
        </div>
      </div>
    );
  }
}
