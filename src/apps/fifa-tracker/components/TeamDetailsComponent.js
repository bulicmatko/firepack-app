
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Team Details Component

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// React
import React from 'react';

// Link
import { Link } from 'react-router';

// Stats Store
import StatsStore from '../stores/StatsStore';

/**
 *  Team Details Component
 */
class TeamDetailsComponent extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            team: StatsStore.getTeamBySlug(this.props.params.slug),
            players: StatsStore.getPlayers()
        };

        this.__handleStatsStoreDataChange = this._handleStatsStoreDataChange.bind(this);
    }

    shouldComponentUpdate (nextProps, nextState) {
        return this.state.team !== nextState.team || this.state.players !== nextState.players;
    }

    componentDidMount () {
        StatsStore.addDataChangeListener(this.__handleStatsStoreDataChange);
    }

    componentWillUnmount () {
        StatsStore.removeDataChangeListener(this.__handleStatsStoreDataChange);
    }

    _handleStatsStoreDataChange () {
        this.setState({
            team: StatsStore.getTeamBySlug(this.props.params.slug),
            players: StatsStore.getPlayers()
        });
    }

    _renderTeamDetails (team) {
        return (
            <section>
                <div className="row">
                    <div className="col col-1-1">

                        <div className="team-data">
                            <div className="team-emblem">
                                <img src={team.emblem} alt={team.name}/>
                            </div>
                            <div className="team-info">
                                <h3 className="team-name">{team.name}</h3>
                                <div className="team-stats">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th title="Matches played">P</th>
                                                <th title="Wins">W</th>
                                                <th title="Draws">D</th>
                                                <th title="Losses">L</th>
                                                <th title="Goals for">GF</th>
                                                <th title="Goals against">GA</th>
                                                <th title="Goal difference">GD</th>
                                                <th title="Points"><strong>Pts.</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="TeamsTableRowComponent">
                                                <td title="Matches played">{team.matchesPlayed}</td>
                                                <td title="Wins">{team.wins}</td>
                                                <td title="Draws">{team.draws}</td>
                                                <td title="Losses">{team.losses}</td>
                                                <td title="Goals for">{team.goalsFor}</td>
                                                <td title="Goals against">{team.goalsAgainst}</td>
                                                <td title="Goal difference">{team.goalDifference}</td>
                                                <td title="Points"><strong>{team.points}</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col col-1-2">
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
                                {this.state.players.map((player) => {
                                    return (
                                        <tr className="PlayersTableRowComponent" key={player.id}>
                                            <td className="player">
                                                <span className="profileImage">
                                                    <img src={player.image} alt={player.name} className="image"/>
                                                </span>
                                                <Link to={'/apps/fifa-tracker/players/' + player.slug}>
                                                    <strong>{player.name} <small>({player.position})</small></strong>
                                                </Link>
                                            </td>
                                            <td title="Goals" className="goals"><strong>{player.goals}</strong></td>
                                            <td title="Assists" className="assists">{player.assists}</td>
                                            <td title="Yellow cards" className="yellow-cards">{player.yellowCards}</td>
                                            <td title="Red cards" className="red-cards">{player.redCards}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col col-1-2">
                        Matches...
                    </div>
                </div>
            </section>
        );
    }

    _renderLoading () {
        return <div>Loading...</div>;
    }

    render () {
        return (
            <section className="TeamDetailsComponent">
                {
                    this.state.team
                        ? this._renderTeamDetails(this.state.team)
                        : this._renderLoading()
                }
            </section>
        );
    }

}

// Export Team Details Component
export default TeamDetailsComponent;
