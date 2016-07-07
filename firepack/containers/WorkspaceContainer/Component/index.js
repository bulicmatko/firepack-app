/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Workspace Container

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes, cloneElement } from 'react';
import cssModules from 'react-css-modules';
import { Link } from 'react-router';

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
        <div styleName="WorkspaceContainer--Sidebar">
          <ul>
            <li>
              <Link to="/">Root</Link>
            </li>
            <li>
              <Link to="/auth">Auth</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/app">App</Link>
            </li>
          </ul>
        </div>
        <div styleName="WorkspaceContainer--Content">
          {cloneElement(children, { key: location.pathname })}
        </div>
      </div>
    );
  }
}
