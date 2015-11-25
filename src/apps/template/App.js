
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    App

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React from 'react';

import Constants from './constants/Constants';

/**
 *  App
 */
class App extends React.Component {

    render () {
        const baseUrl = Constants.BaseUrl;

        return (
            <div className="App">
                <div className="App--Sidebar">
                    <h3 className="title">
                        <i className="fa fa-fw fa-futbol-o"></i>
                        <span>Template</span>
                    </h3>
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
