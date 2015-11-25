
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Players Table Component

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// React
import React from 'react';

// Link
import { Link } from 'react-router';

// Constants
import Constants from '../../constants/Constants';

import PlayerCard from './PlayerCard';

/**
 *  Players Table Component
 */
class PlayersTableComponent extends React.Component {

    shouldComponentUpdate (nextProps, nextState) {
        return this.props.players !== nextProps.players;
    }

    _renderPlayerRow (player) {
        const baseUrl = Constants.BaseUrl;
        return (
            <tr className="PlayersTableRowComponent" key={player.id}>
                <td className="player">
                    <Link to={`/apps/${baseUrl}/players/${player.slug}`}>
                        <PlayerCard
                            image={player.image}
                            name={player.name}
                            position={player.position}
                            team={player.team.name}
                        />
                    </Link>
                </td>
                <td title="Goals" className="goals"><strong>{player.goals}</strong></td>
                <td title="Assists" className="assists">{player.assists}</td>
                <td title="Yellow cards" className="yellow-cards">{player.yellowCards}</td>
                <td title="Red cards" className="red-cards">{player.redCards}</td>
            </tr>
        );
    }

    render () {
        return (
            <table className="PlayersTableComponent">
                <thead>
                    <tr>
                        <th className="player">Players</th>
                        <th title="Goals" className="goals"><strong>G</strong></th>
                        <th title="Assists" className="assists">A</th>
                        <th title="Yellow cards" className="yellow-cards"><span>YC</span></th>
                        <th title="Red cards" className="red-cards"><span>RC</span></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.players.map((player) => {
                            return this._renderPlayerRow(player);
                        })
                    }
                </tbody>
            </table>
        );
    }

}

// Export Players Table Component
export default PlayersTableComponent;
