
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Layout

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 *  Layout
 */
class Layout extends Component {

    _renderSidebarTitle () {
        return (
            <h3 className="title">
                <i className="fa fa-fw fa-rocket"></i>
                <span>Example App</span>
            </h3>
        );
    }

    _renderSidebarMenu () {
        return (
            <ul>
                <li><Link to="/apps/example-app/dashboard">Dashboard</Link></li>
                <li><Link to="/apps/example-app/error-example">Error Example</Link></li>
            </ul>
        );
    }

    render () {
        return (
            <div className="App">
                <div className="App--Sidebar">
                    {this._renderSidebarTitle()}
                    {this._renderSidebarMenu()}
                </div>
                <div className="App--Main">
                    {this.props.children}
                </div>
            </div>
        );
    }

}

// Export Layout
export default Layout;
