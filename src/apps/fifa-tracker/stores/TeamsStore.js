
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Teams Store

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';

import BaseStore from '../../../../firebox/src/_lib/BaseStore';

import Firebase from '../firebase/Firebase';

/**
 *  Teams Store
 */
class TeamsStore extends BaseStore {

    constructor (props) {
        super(props);

        this._teams = [];

        this._DB = Firebase.child('teams');
        this._DB.on('value', this._handleServerData.bind(this));

        this._onDispatcherEvent(this._handleDispatcherEvent.bind(this));
    }

    _handleServerData (teams) {
        this._teams = [];

        teams.forEach((team) => {
            this._teams.push(_.extend({}, team.val(), {id: team.key()}));
        });

        this._emitChange();
    }

    _addTeam (team) {
        // TODO: general and slug validation
        // TODO: Remove id (if exists)
        this._DB.push(team);
    }

    getTeamById (id) {
        return _.where(this._teams, {id: id})[0];
    }

    getTeamBySlug (slug) {
        return _.where(this._teams, {slug: slug})[0];
    }

    getTeams () {
        return this._teams;
    }

    _handleDispatcherEvent (payload) {
        // console.log(payload);
    }

}

// Export Teams Store
export default new TeamsStore();
