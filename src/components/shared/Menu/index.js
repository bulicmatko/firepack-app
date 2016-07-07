/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Menu

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import { Link } from 'react-router';

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
            <Link to="/app">Home Page</Link>
          </li>
          <li>
            <Link to="/app/page-1">Page 1</Link>
          </li>
          <li>
            <Link to="/app/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
    );
  }
}
