
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Error 404 - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component } from 'react';

/**
 *  Error 404
 */
class Error404 extends Component {

    render () {
        return (
            <div>
                <h1>
                    <i className="fa fa-fw fa-exclamation-triangle"></i>
                    <span>Error 404</span>
                </h1>
                <p>
                    The page you are looking for does not exist.
                </p>
            </div>
        );
    }

}

// Export Error 404
export default Error404;
