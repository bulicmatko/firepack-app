
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Component - Layout

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component } from 'react';
import { Link } from 'react-router';
import { AppWrap, AppSidebar, AppMain } from 'firepack';

/**
 *  Layout Component
 */
class Layout extends Component {

    render () {
        const sidebarConfig = {
            icon: 'rocket',
            title: 'Example App',
            menu: [
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
        };

        return (
            <AppWrap>
                <AppSidebar {...sidebarConfig}/>
                <AppMain>
                    {this.props.children}
                </AppMain>
            </AppWrap>
        );
    }

}

// Export Layout Component
export default Layout;
