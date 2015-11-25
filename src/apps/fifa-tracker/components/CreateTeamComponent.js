
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Create Team Component

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// React
import React from 'react';

/**
 *  Create Team Component
 */
class CreateTeamComponent extends React.Component {

    constructor (props) {
        super(props);

        // this.state = {
        //     team: StatsStore.getTeamBySlug(this.props.params.slug)
        // };

        // this.__handleStatsStoreDataChange = this._handleStatsStoreDataChange.bind(this);
    }

    // shouldComponentUpdate (nextProps, nextState) {
    //     return this.state.team !== nextState.team || this.state.players !== nextState.players;
    // }

    // componentDidMount () {
    //     StatsStore.addDataChangeListener(this.__handleStatsStoreDataChange);
    // }

    // componentWillUnmount () {
    //     StatsStore.removeDataChangeListener(this.__handleStatsStoreDataChange);
    // }

    // _handleStatsStoreDataChange () {
    //     this.setState({
    //         team: StatsStore.getTeamBySlug(this.props.params.slug),
    //         players: StatsStore.getPlayers()
    //     });
    // }

    // _renderTeamDetails (team) {
    //     return (
    //         <section>
    //             <div className="row">
    //                 <div className="col col-1-1">
    //                     <div className="team-data">
    //                         <div className="team-emblem">
    //                             <img src={team.emblem} alt={team.name}/>
    //                         </div>
    //                         <div className="team-info">
    //                             <h3 className="team-name">{team.name}</h3>
    //                             <p className="team-description">No description...</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>

    //             <div className="row">
    //                 <div className="col col-1-2">
    //                     <h3 className="section-title">Stats</h3>
    //                     <table className="TeamsTableComponent">
    //                         <thead>
    //                             <tr>
    //                                 <th title="Matches played" className="matches-played">P</th>
    //                                 <th title="Wins" className="wins">W</th>
    //                                 <th title="Draws" className="draws">D</th>
    //                                 <th title="Losses" className="losses">L</th>
    //                                 <th title="Goals for" className="goals-for">GF</th>
    //                                 <th title="Goals against" className="goals-against">GA</th>
    //                                 <th title="Goal difference" className="goal-difference">GD</th>
    //                                 <th title="Points" className="points"><strong>Pts.</strong></th>
    //                             </tr>
    //                         </thead>
    //                         <tbody>
    //                             <tr className="TeamsTableRowComponent">
    //                                 <td title="Matches played" className="matches-played">{team.matchesPlayed}</td>
    //                                 <td title="Wins" className="wins">{team.wins}</td>
    //                                 <td title="Draws" className="draws">{team.draws}</td>
    //                                 <td title="Losses" className="losses">{team.losses}</td>
    //                                 <td title="Goals for" className="goals-for">{team.goalsFor}</td>
    //                                 <td title="Goals against" className="goals-against">{team.goalsAgainst}</td>
    //                                 <td title="Goal difference" className="goal-difference">{team.goalDifference}</td>
    //                                 <td title="Points" className="points"><strong>{team.points}</strong></td>
    //                             </tr>
    //                         </tbody>
    //                     </table>
    //                 </div>
    //                 <div className="col col-1-2">
    //                     <h3 className="section-title">Players</h3>
    //                     <table className="PlayersTableComponent">
    //                         <thead>
    //                             <tr>
    //                                 <th title="Rank" className="rank">#</th>
    //                                 <th className="player">Player</th>
    //                                 <th title="Goals" className="goals"><strong>G</strong></th>
    //                                 <th title="Assists" className="assists">A</th>
    //                                 <th title="Yellow cards" className="yellow-cards"><span>YC</span></th>
    //                                 <th title="Red cards" className="red-cards"><span>RC</span></th>
    //                             </tr>
    //                         </thead>
    //                         <tbody>
    //                             {this.state.players.map((player) => {
    //                                 return (
    //                                     <tr className="PlayersTableRowComponent" key={player.id}>
    //                                         <td title="Rank" className="rank">#</td>
    //                                         <td className="player">
    //                                             <span className="profileImage">
    //                                                 <img src={player.team.emblem} alt={player.team.name} className="emblem"/>
    //                                                 <img src={player.image} alt={player.name} className="image"/>
    //                                             </span>
    //                                             <Link to={'/apps/fifa-tracker/players/' + player.slug}>
    //                                                 <strong>{player.name} <small>({player.position})</small></strong>
    //                                             </Link>
    //                                         </td>
    //                                         <td title="Goals" className="goals"><strong>{player.goals}</strong></td>
    //                                         <td title="Assists" className="assists">{player.assists}</td>
    //                                         <td title="Yellow cards" className="yellow-cards">{player.yellowCards}</td>
    //                                         <td title="Red cards" className="red-cards">{player.redCards}</td>
    //                                     </tr>
    //                                 );
    //                             })}
    //                         </tbody>
    //                     </table>
    //                 </div>
    //             </div>
    //         </section>
    //     );
    // }

    // _renderLoading () {
    //     return <div>Loading...</div>;
    // }

    render () {
        return (
            <div>
                <h1>Create team</h1>
                <p>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Slug</label>
                            <input type="text"/>
                        </div>
                        <p className="help-text">Enter team slug.</p>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text"/>
                        </div>
                        <p className="help-text">Enter team name.</p>
                    </div>
                </p>
            </div>
        );
    }

}

// Export Create Team Component
export default CreateTeamComponent;
