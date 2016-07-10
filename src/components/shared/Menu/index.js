/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Menu

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import { IndexLink } from 'react-router';

import styles from './styles';

/**
 *  Menu
 */
@cssModules(styles)
export default class extends Component {
  static displayName = 'Menu';

  static propTypes = {
    data: PropTypes.object,
  };

  static defaultProps = {
    data: {},
  };

  render() {
    return (
      <div styleName="Menu">
        <ul styleName="Menu--Content">
          <li>
            <IndexLink to="/app" activeClassName="isLinkActive">Home Page</IndexLink>
          </li>
          <li>
            <IndexLink to="/app/page-1" activeClassName="isLinkActive">Page 1</IndexLink>
          </li>
          <li>
            <IndexLink to="/app/page-2" activeClassName="isLinkActive">Page 2</IndexLink>
          </li>
        </ul>
      </div>
    );
  }
}
