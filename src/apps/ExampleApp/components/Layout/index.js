
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Component - Layout

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component } from 'react';
import { Link } from 'react-router';
import { SidebarMenu } from 'firepack';

/**
 *  Layout Component
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
            <SidebarMenu menu={
                [
                    {
                        title: 'Menu',
                        links: [
                            {
                                icon: 'tachometer',
                                title: 'Dashboard',
                                route: '/apps/example-app/dashboard'
                            }, {
                                icon: 'exclamation-triangle',
                                title: 'Error 404',
                                route: '/apps/example-app/error-404'
                            }
                        ]
                    }
                ]
            }/>
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

// Export Layout Component
export default Layout;
