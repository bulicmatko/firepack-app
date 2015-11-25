
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Players List Component

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// React
import React from 'react';

// Stats Store
import StatsStore from '../stores/StatsStore';

// Players Table Component
import PlayersTableComponent from './partials/PlayersTableComponent';

/**
 *  Players List Component
 */
class PlayersListComponent extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            players: StatsStore.getPlayers()
        };

        this.__handleStatsStoreDataChange = this._handleStatsStoreDataChange.bind(this);
    }

    shouldComponentUpdate (nextProps, nextState) {
        return this.state.players !== nextState.players;
    }

    componentDidMount () {
        StatsStore.addDataChangeListener(this.__handleStatsStoreDataChange);
    }

    componentWillUnmount () {
        StatsStore.removeDataChangeListener(this.__handleStatsStoreDataChange);
    }

    _handleStatsStoreDataChange () {
        this.setState({
            players: StatsStore.getPlayers()
        });
    }

    _renderPlayersTable (players) {
        return (
            <div>
                <nav className="navbar navbar-toolbar" role="navigation">
                    <div className="container-fluid">
                        <h2>Players</h2>
                        <form className="navbar-form navbar-left" role="search">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search players"/>
                            </div>
                        </form>
                        <div className="btn-toolbar pull-right" role="toolbar">
                            <div className="btn-group">
                                <a href="#" className="btn btn-default">All</a>
                                <a href="#" className="btn btn-default">Friends</a>
                                <a href="#" className="btn btn-default">Family</a>
                            </div>
                            <div className="btn-group">
                                <a href="#" className="btn btn-danger">Add Player</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <ul className="nav nav-tabs nav-tabs-google">
                    <li role="presentation" className="active"><a role="button">Home</a></li>
                    <li role="presentation"><a role="button">Profile</a></li>
                    <li role="presentation"><a role="button">Messages</a></li>
                </ul>
                <PlayersTableComponent players={players}/>
            </div>
        );
    }

    _renderLoading () {
        return <div className="Loading">Loading...</div>;
    }

    render () {
        return (
            <div className="PlayersListComponent">
                {
                    this.state.players.length
                        ? this._renderPlayersTable(this.state.players)
                        : this._renderLoading()
                }
            </div>
        );
    }

}

// Export Players List Component
export default PlayersListComponent;
