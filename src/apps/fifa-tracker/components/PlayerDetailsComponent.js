
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Player Details Component

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// React
import React from 'react';

// Stats Store
import StatsStore from '../stores/StatsStore';

/**
 *  Player Details Component
 */
class PlayerDetailsComponent extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            player: StatsStore.getPlayerBySlug(this.props.params.slug)
        };

        this.__handleStatsStoreDataChange = this._handleStatsStoreDataChange.bind(this);
    }

    shouldComponentUpdate (nextProps, nextState) {
        return this.state.player !== nextState.player;
    }

    componentDidMount () {
        StatsStore.addDataChangeListener(this.__handleStatsStoreDataChange);
    }

    componentWillUnmount () {
        StatsStore.removeDataChangeListener(this.__handleStatsStoreDataChange);
    }

    _handleStatsStoreDataChange () {
        this.setState({
            player: StatsStore.getPlayerBySlug(this.props.params.slug)
        });
    }

    _renderPlayerDetails (player) {
        return (
            <div>
                <div className="player-data">
                    <div className="image">
                        <img src={player.image} alt={player.name}/>
                        <img src={player.team.emblem} alt={player.team.name}/>
                    </div>
                    <h2 className="name">{player.name}</h2>
                </div>
                <ul>
                    <li>Yellow cards: <strong>{player.yellowCards}</strong></li>
                    <li>Red cards: <strong>{player.redCards}</strong></li>
                    <li>Assists: <strong>{player.assists}</strong></li>
                    <li>Goals: <strong>{player.goals}</strong></li>
                </ul>
            </div>
        );
    }

    _renderLoading () {
        return <div>Loading...</div>;
    }

    render () {
        return (
            <section className="PlayerDetailsComponent">
                <h1>Player</h1>
                {
                    this.state.player
                        ? this._renderPlayerDetails(this.state.player)
                        : this._renderLoading()
                }
            </section>
        );
    }

}

// Export Player Details Component
export default PlayerDetailsComponent;
