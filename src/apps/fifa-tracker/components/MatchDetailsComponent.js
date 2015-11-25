
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Match Details Component

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
 *  Match Details Component
 */
class MatchDetailsComponent extends React.Component {

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

    _renderMatchDetails (match) {
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
            <section className="MatchDetailsComponent">
                <table style={{width: '100%', textAlign: 'center'}}>
                    <tr>
                        <td>
                            <Link to={'/apps/fifa-tracker/teams/' + homeTeam.slug}>
                                <img src={homeTeam.emblem} alt={homeTeam.name}/>
                                <h2>{homeTeam.name}</h2>
                            </Link>
                        </td>
                        <td>
                            <strong>{homeTeamGoals.length}</strong> : <strong>{awayTeamGoals.length}</strong>
                        </td>
                        <td>
                            <Link to={'/apps/fifa-tracker/teams/' + awayTeam.slug}>
                                <img src={awayTeam.emblem} alt={awayTeam.name}/>
                                <h2>{awayTeam.name}</h2>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {homeTeamGoals.map((goal) => {
                                return (
                                    <div key={goal.id}>
                                        {_.where(this.state.players, {id: goal.goalPlayerId})[0].name}
                                        <br/>
                                        <small style={{color: '#999'}}>Assist: {_.where(this.state.players, {id: goal.assistPlayerId})[0] ? _.where(this.state.players, {id: goal.assistPlayerId})[0].name : 'No assist!'}</small>
                                    </div>
                                );
                            })}
                        </td>
                        <td>Goals</td>
                        <td>
                            {awayTeamGoals.map((goal) => {
                                return (
                                    <div style={{lineHeight: '25px'}} key={goal.id}>
                                        {_.where(this.state.players, {id: goal.goalPlayerId})[0].name}
                                        <br/>
                                        <small style={{color: '#999'}}>Assist: {_.where(this.state.players, {id: goal.assistPlayerId})[0] ? _.where(this.state.players, {id: goal.assistPlayerId})[0].name : 'No assist!'}</small>
                                    </div>
                                );
                            })}
                        </td>
                    </tr>
                    <tr>
                        <td>{_.where(homeTeamCards, {type: 'yellow'}).length}</td>
                        <td>Yellow cards</td>
                        <td>{_.where(awayTeamCards, {type: 'yellow'}).length}</td>
                    </tr>
                    <tr>
                        <td>{_.where(homeTeamCards, {type: 'red'}).length}</td>
                        <td>Red cards</td>
                        <td>{_.where(awayTeamCards, {type: 'red'}).length}</td>
                    </tr>
                </table>
            </section>
        );}

    _renderLoading () {
        return <div>Loading...</div>;
    }

    render () {
        const match = _.where(this.state.matches, {id: this.props.params.id})[0];

        return match
            ? this._renderMatchDetails(match)
            : this._renderLoading();
    }

}

// Export Match Details Component
export default MatchDetailsComponent;
