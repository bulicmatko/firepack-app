
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Stats Store

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';

import BaseStore from '../../../../firebox/src/_lib/BaseStore';

import TeamsStore from '../stores/TeamsStore';
import PlayersStore from '../stores/PlayersStore';
import MatchesStore from '../stores/MatchesStore';
import GoalsStore from '../stores/GoalsStore';
import CardsStore from '../stores/CardsStore';

/**
 *  Stats Store
 */
class StatsStore extends BaseStore {

    constructor (props) {
        super(props);

        this._teams = TeamsStore.getTeams();
        this._players = PlayersStore.getPlayers();
        this._matches = MatchesStore.getMatches();
        this._goals = GoalsStore.getGoals();
        this._cards = CardsStore.getCards();

        TeamsStore.addDataChangeListener(this._handleTeamsStoreDataChange.bind(this));
        PlayersStore.addDataChangeListener(this._handlePlayersStoreDataChange.bind(this));
        MatchesStore.addDataChangeListener(this._handleMatchesStoreDataChange.bind(this));
        GoalsStore.addDataChangeListener(this._handleGoalsStoreDataChange.bind(this));
        CardsStore.addDataChangeListener(this._handleCardsStoreDataChange.bind(this));

        this._onDispatcherEvent(this._handleDispatcherEvent.bind(this));
    }

    _handleTeamsStoreDataChange () {
        this._teams = TeamsStore.getTeams();
        this._emitChange();
    }

    _handlePlayersStoreDataChange () {
        this._players = PlayersStore.getPlayers();
        this._emitChange();
    }

    _handleMatchesStoreDataChange () {
        this._matches = MatchesStore.getMatches();
        this._emitChange();
    }

    _handleGoalsStoreDataChange () {
        this._goals = GoalsStore.getGoals();
        this._emitChange();
    }

    _handleCardsStoreDataChange () {
        this._cards = CardsStore.getCards();
        this._emitChange();
    }

    getPlayers () {
        return this._players.map((player) => {
            const team = _.where(this._teams, {id: player.teamId})[0];
            const goals = _.where(this._goals, {goalPlayerId: player.id}).length;
            const assists = _.where(this._goals, {assistPlayerId: player.id}).length;
            const yellowCards = _.where(this._cards, {type: 'yellow', playerId: player.id}).length;
            const redCards = _.where(this._cards, {type: 'red', playerId: player.id}).length;

            return _.extend({}, player, {team, goals, assists, yellowCards, redCards});
        });
    }

    getPlayerBySlug (slug) {
        if (!this._players.length) { return null; }

        return _.where(this.getPlayers(), {slug: slug})[0];
    }

    getTeams () {
        return this._teams.map((team) => {
            const matches = _.union(
                _.where(this._matches, {homeTeamId: team.id}),
                _.where(this._matches, {awayTeamId: team.id})
            );
            let goalsFor = 0, goalsAgainst = 0, goalDifference = 0;
            let matchGoalsFor = 0, matchGoalsAgainst = 0;
            let matchesPlayed = 0, wins = 0, draws = 0, losses = 0, points;

            matches.forEach((match) => {
                const goals = _.where(this._goals, {matchId: match.id});

                goals.forEach((goal, index) => {
                    const player = _.where(this._players, {id: goal.goalPlayerId})[0];

                    // TODO: OWN GOALS!!!
                    if (team.id === player.teamId) {
                        matchGoalsFor++;
                    } else {
                        matchGoalsAgainst++;
                    }
                });

                if (matchGoalsFor > matchGoalsAgainst) {
                    wins++;
                } else if (matchGoalsFor < matchGoalsAgainst) {
                    losses++;
                } else {
                    draws++;
                }

                matchesPlayed = matches.length;
                goalsFor += matchGoalsFor;
                goalsAgainst += matchGoalsAgainst;
                goalDifference = goalsFor - goalsAgainst;
                points = (wins * 3) + draws;

            });
            return _.extend({}, team, {matchesPlayed, wins, losses, draws, goalsFor, goalsAgainst, goalDifference, points});
        });
    }

    getTeamBySlug (slug) {
        if (!this._teams.length) { return null; }

        return _.where(this.getTeams(), {slug: slug})[0];
    }

    _handleDispatcherEvent (payload) {
        // console.log(payload);
    }

}

// Export Stats Store
export default new StatsStore();
