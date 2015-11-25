
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Matches List Component

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// Lodash
import _ from 'lodash';

// React
import React from 'react';

// Link
import { Link } from 'react-router';

// Teams Store
import TeamsStore from '../stores/TeamsStore';

// Players Store
import PlayersStore from '../stores/PlayersStore';

// Matches Store
import MatchesStore from '../stores/MatchesStore';

// Goals Store
import GoalsStore from '../stores/GoalsStore';

// Cards Store
import CardsStore from '../stores/CardsStore';

/**
 *  Matches List Component
 */
class MatchesListComponent extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            teams: TeamsStore.getTeams(),
            players: PlayersStore.getPlayers(),
            matches: MatchesStore.getMatches(),
            goals: GoalsStore.getGoals(),
            cards: CardsStore.getCards()
        };

        this.__handleTeamsStoreDataChange = this._handleTeamsStoreDataChange.bind(this);
        this.__handlePlayersStoreDataChange = this._handlePlayersStoreDataChange.bind(this);
        this.__handleMatchesStoreDataChange = this._handleMatchesStoreDataChange.bind(this);
        this.__handleGoalsStoreDataChange = this._handleGoalsStoreDataChange.bind(this);
        this.__handleCardsStoreDataChange = this._handleCardsStoreDataChange.bind(this);
    }

    shouldComponentUpdate (nextProps, nextState) {
        return (
            this.state.teams !== nextState.teams ||
            this.state.players !== nextState.players ||
            this.state.matches !== nextState.matches ||
            this.state.goals !== nextState.goals ||
            this.state.cards !== nextState.cards
        );
    }

    componentDidMount () {
        TeamsStore.addDataChangeListener(this.__handleTeamsStoreDataChange);
        PlayersStore.addDataChangeListener(this.__handlePlayersStoreDataChange);
        MatchesStore.addDataChangeListener(this.__handleMatchesStoreDataChange);
        GoalsStore.addDataChangeListener(this.__handleGoalsStoreDataChange);
        CardsStore.addDataChangeListener(this.__handleCardsStoreDataChange);
    }

    componentWillUnmount () {
        TeamsStore.removeDataChangeListener(this.__handleTeamsStoreDataChange);
        PlayersStore.removeDataChangeListener(this.__handlePlayersStoreDataChange);
        MatchesStore.removeDataChangeListener(this.__handleMatchesStoreDataChange);
        GoalsStore.removeDataChangeListener(this.__handleGoalsStoreDataChange);
        CardsStore.removeDataChangeListener(this.__handleCardsStoreDataChange);
    }

    _handleTeamsStoreDataChange () {
        this.setState({
            teams: TeamsStore.getTeams()
        });
    }

    _handlePlayersStoreDataChange () {
        this.setState({
            players: PlayersStore.getPlayers()
        });
    }

    _handleMatchesStoreDataChange () {
        this.setState({
            matches: MatchesStore.getMatches()
        });
    }

    _handleGoalsStoreDataChange () {
        this.setState({
            goals: GoalsStore.getGoals()
        });
    }

    _handleCardsStoreDataChange () {
        this.setState({
            cards: CardsStore.getCards()
        });
    }

    _renderMatchesList () {
        return (
            <section className="MatchesListComponent">
                <h1>Matches</h1>
                <table className="MatchesTableComponent">
                    <thead>
                        <tr>
                            <th title="Date" className="date">Date</th>
                            <th title="Home team" className="home-team">Home team</th>
                            <th title="Result" className="result">Result</th>
                            <th title="Away team" className="away-team">Away team</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.matches.map((match, index) => {
                            const homeTeam = _.where(this.state.teams, {id: match.homeTeamId})[0];
                            const awayTeam = _.where(this.state.teams, {id: match.awayTeamId})[0];
                            const goals = _.where(this.state.goals, {matchId: match.id});
                            const cards = _.where(this.state.cards, {matchId: match.id});

                            const homeTeamGoals = [], awayTeamGoals = [];

                            goals.forEach((goal, index) => {

                                const player = _.where(this.state.players, {id: goal.goalPlayerId})[0];
                                const team = _.where(this.state.teams, {id: player.teamId})[0];

                                if (homeTeam.id === team.id) {
                                    homeTeamGoals.push(goal);
                                } else if (awayTeam.id === team.id) {
                                    awayTeamGoals.push(goal);
                                }
                            });

                            const homeTeamCards = [], awayTeamCards = [];

                            cards.forEach((card, index) => {

                                const player = _.where(this.state.players, {id: card.playerId})[0];
                                const team = _.where(this.state.teams, {id: player.teamId})[0];

                                if (homeTeam.id === team.id) {
                                    homeTeamCards.push(card);
                                } else if (awayTeam.id === team.id) {
                                    awayTeamCards.push(card);
                                }
                            });

                            return (
                                <tr className="MatchesTableRowComponent" key={index}>
                                    <td title="Date" className="date">{match.date}</td>
                                    <td title="Home team" className="home-team">
                                        <Link to={'/apps/fifa-tracker/teams/' + homeTeam.slug}>
                                            <strong>{homeTeam.name}</strong>
                                            <img src={homeTeam.emblem} alt={homeTeam.name}/>
                                        </Link>
                                        <br/>
                                        {homeTeamGoals.map((goal) => {
                                            return (
                                                <div style={{lineHeight: '25px'}} key={goal.id}>
                                                    {_.where(this.state.players, {id: goal.goalPlayerId})[0].name}
                                                    <br/>
                                                    <small style={{color: '#999'}}>Assist: {_.where(this.state.players, {id: goal.assistPlayerId})[0] ? _.where(this.state.players, {id: goal.assistPlayerId})[0].name : 'No assist!'}</small>
                                                </div>
                                            );
                                        })}
                                        {homeTeamCards.map((card) => {
                                            return (
                                                <div style={{lineHeight: '25px', color: (card.type === 'yellow') ? '#ebc944' : '#c02f1d'}} key={card.id}>
                                                    {_.where(this.state.players, {id: card.playerId})[0].name + ': ' + card.type}
                                                </div>
                                            );
                                        })}
                                    </td>
                                    <td title="Result" className="result">
                                        <Link to={'/apps/fifa-tracker/matches/' + match.id}>
                                            <strong>{homeTeamGoals.length}:{awayTeamGoals.length}</strong>
                                        </Link>
                                    </td>
                                    <td title="Away team" className="away-team">
                                        <Link to={'/apps/fifa-tracker/teams/' + awayTeam.slug}>
                                            <img src={awayTeam.emblem} alt={awayTeam.name}/>
                                            <strong>{awayTeam.name}</strong>
                                        </Link>
                                        <br/>
                                        {awayTeamGoals.map((goal) => {
                                            return (
                                                <div style={{lineHeight: '25px'}} key={goal.id}>
                                                    {_.where(this.state.players, {id: goal.goalPlayerId})[0].name}
                                                    <br/>
                                                    <small style={{color: '#999'}}>Assist: {_.where(this.state.players, {id: goal.assistPlayerId})[0] ? _.where(this.state.players, {id: goal.assistPlayerId})[0].name : 'No assist!'}</small>
                                                </div>
                                            );
                                        })}
                                        {awayTeamCards.map((card) => {
                                            return (
                                                <div style={{lineHeight: '25px', color: (card.type === 'yellow') ? '#ebc944' : '#c02f1d'}} key={card.id}>
                                                    {_.where(this.state.players, {id: card.playerId})[0].name + ': ' + card.type}
                                                </div>
                                            );
                                        })}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
        );}

    _renderLoading () {
        return <div>Loading...</div>;
    }

    render () {
        return this.state.matches.length
            ? this._renderMatchesList()
            : this._renderLoading();
    }

}

// Export Matches List Component
export default MatchesListComponent;
