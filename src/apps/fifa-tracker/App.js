
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    App

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React from 'react';

import Constants from './constants/Constants';

import Menu from '../../../firebox/src/components/_shared/Menu';

/**
 *  App
 */
class App extends React.Component {

    render () {
        const baseUrl = Constants.BaseUrl;

        const menu = [
            {
                title: 'Menu',
                links: [
                    {
                        icon: 'tachometer',
                        title: 'Dashboard',
                        route: `/apps/${baseUrl}/dashboard`
                    }
                ]
            }, {
                title: 'Overview',
                links: [
                    {
                        icon: 'users',
                        title: 'Teams',
                        route: `/apps/${baseUrl}/teams`
                    }, {
                        icon: 'user',
                        title: 'Players',
                        route: `/apps/${baseUrl}/players`
                    }, {
                        icon: 'trophy',
                        title: 'Matches',
                        route: `/apps/${baseUrl}/matches`
                    }
                ]
            }
        ];

        return (
            <div className="App">
                <div className="App--Sidebar">
                    <h3 className="title">
                        <i className="fa fa-fw fa-futbol-o"></i>
                        <span>Fifa Tracker</span>
                    </h3>
                    <Menu menu={menu}/>
                </div>
                <div className="App--Main">
                    {this.props.children}
                </div>
            </div>
        );
    }

}

// Export App
export default App;
