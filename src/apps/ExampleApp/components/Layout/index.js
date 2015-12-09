
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Layout - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import { AppWrap, AppSidebar, AppMain } from 'firepack';

/**
 *  Layout
 */
class Layout extends Component {
    static displayName = 'Layout';

    static propTypes = {
        children: PropTypes.element
    };

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

// Export Layout
export default Layout;
