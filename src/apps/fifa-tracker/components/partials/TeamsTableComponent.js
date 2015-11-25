
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Teams Table Component

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// React
import React from 'react';

// Link
import { Link } from 'react-router';

/**
 *  Teams Table Component
 */
class TeamsTableComponent extends React.Component {

    shouldComponentUpdate (nextProps, nextState) {
        return this.props.teams !== nextProps.teams;
    }

    _renderTeamRow (team) {
        return (
            <tr className="TeamsTableRowComponent" key={team.id}>
                <td title="Rank" className="rank">#</td>
                <td className="team">
                    <img src={team.emblem} alt={team.name}/>
                    <Link to={'/apps/fifa-tracker/teams/' + team.slug}>
                        <strong>{team.name}</strong>
                    </Link>
                </td>
                <td title="Matches played" className="matches-played">{team.matchesPlayed}</td>
                <td title="Wins" className="wins">{team.wins}</td>
                <td title="Draws" className="draws">{team.draws}</td>
                <td title="Losses" className="losses">{team.losses}</td>
                <td title="Goals for" className="goals-for">{team.goalsFor}</td>
                <td title="Goals against" className="goals-against">{team.goalsAgainst}</td>
                <td title="Goal difference" className="goal-difference">{team.goalDifference}</td>
                <td title="Points" className="points"><strong>{team.points}</strong></td>
            </tr>
        );
    }

    render () {
        return (
            <table className="TeamsTableComponent">
                <thead>
                    <tr>
                        <th title="Rank" className="rank">#</th>
                        <th className="team">Team</th>
                        <th title="Matches played" className="matches-played">P</th>
                        <th title="Wins" className="wins">W</th>
                        <th title="Draws" className="draws">D</th>
                        <th title="Losses" className="losses">L</th>
                        <th title="Goals for" className="goals-for">GF</th>
                        <th title="Goals against" className="goals-against">GA</th>
                        <th title="Goal difference" className="goal-difference">GD</th>
                        <th title="Points" className="points"><strong>Pts.</strong></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.teams.map((team) => {
                            return this._renderTeamRow(team);
                        })
                    }
                </tbody>
            </table>
        );
    }

}

// Export Teams Table Component
export default TeamsTableComponent;
