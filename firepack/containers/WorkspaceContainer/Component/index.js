/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Workspace Container

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes, cloneElement } from 'react';
import cssModules from 'react-css-modules';

import Menu from '../../../components/shared/Menu';

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

  static contextTypes = {
    menu: PropTypes.array,
  };

  render() {
    const { children } = this.props;
    const { menu } = this.context;

    const menuConfig = [
      {
        title: 'Menu',
        links: [
          {
            icon: 'tachometer',
            title: 'Dashboard',
            route: '/dashboard',
          },
        ],
      },
      ...menu,
    ];

    return (
      <div styleName="WorkspaceContainer">
        <div styleName="WorkspaceContainer--Sidebar">
          <h2 styleName="title">
            <i className="fa fa-fw fa-cube" />
            <span>Firepack</span>
          </h2>
          <Menu menu={menuConfig} />
        </div>
        <div styleName="WorkspaceContainer--Content">
          {cloneElement(children, { key: location.pathname })}
        </div>
      </div>
    );
  }
}
