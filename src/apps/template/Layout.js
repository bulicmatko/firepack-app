
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Layout

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 *  Layout
 */
class Layout extends Component {

    render () {
        return (
            <div className="App">
                <div className="App--Sidebar">
                    <h3 className="title">
                        <i className="fa fa-fw fa-rocket"></i>
                        <span>Firepack App</span>
                    </h3>
                    <ul>
                        <li>
                            <Link to="/apps/template/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/apps/template/hohoho">Error</Link>
                        </li>
                    </ul>
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
