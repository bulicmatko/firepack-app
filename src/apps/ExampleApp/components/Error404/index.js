
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Error 404 - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component } from 'react';

/**
 *  Error 404
 */
class Error404 extends Component {
    static displayName = 'Error404';

    render () {
        return (
            <div>
                <div className="App--Topbar">
                    <h1 className="title">
                        <i className="fa fa-fw fa-exclamation-triangle"></i>
                        <span>Error 404</span>
                    </h1>
                </div>
                <div className="App--Content">
                    <p>
                        The page you are looking for does not exist.
                    </p>
                </div>
            </div>
        );
    }
}

// Export Error 404
export default Error404;
