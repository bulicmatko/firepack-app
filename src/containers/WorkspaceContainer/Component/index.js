/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Workspace Container

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes, cloneElement } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles';

const { location } = window;

/**
 *  Workspace Container
 */
@cssModules(styles)
export default class extends Component {
  static displayName = 'WorkspaceContainer';

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children } = this.props;

    return (
      <div styleName="WorkspaceContainer">
        <div styleName="WorkspaceContainer--Content">
          {cloneElement(children, { key: location.pathname })}
        </div>
      </div>
    );
  }
}
