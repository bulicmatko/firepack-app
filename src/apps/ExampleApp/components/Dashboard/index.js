
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Dashboard - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component } from 'react';

/**
 *  Dashboard
 */
class Dashboard extends Component {

    render () {
        return (
            <div>
                <div className="App--Topbar">
                    <h1 className="title">
                        <i className="fa fa-fw fa-tachometer"></i>
                        <span>Dashboard</span>
                    </h1>
                </div>
                <div className="App--Content">
                    <p>
                        Welcome to Dashboard.
                    </p>
                </div>
            </div>
        );
    }

}

// Export Dashboard
export default Dashboard;
