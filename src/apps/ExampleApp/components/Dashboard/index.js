
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
                <h1>
                    <i className="fa fa-fw fa-tachometer"></i>
                    <span>Dashboard</span>
                </h1>
                <p>
                    Welcome to Dashboard.
                </p>
            </div>
        );
    }

}

// Export Dashboard
export default Dashboard;
