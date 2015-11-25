
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Players Store

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';

import BaseStore from '../../../../firebox/src/_lib/BaseStore';

import Firebase from '../firebase/Firebase';

/**
 *  Players Store
 */
class PlayersStore extends BaseStore {

    constructor (props) {
        super(props);

        this._players = [];

        this._DB = Firebase.child('players');
        this._DB.on('value', this._handleServerData.bind(this));

        this._onDispatcherEvent(this._handleDispatcherEvent.bind(this));
    }

    _handleServerData (players) {
        this._players = [];

        players.forEach((player) => {
            this._players.push(_.extend({}, player.val(), {id: player.key()}));
        });

        this._emitChange();
    }

    _addPlayer (player) {
        // TODO: general and slug validation
        // TODO: Remove id (if exists)
        this._DB.push(player);
    }

    getPlayerById (id) {
        return _.where(this._players, {id: id})[0];
    }

    getPlayerBySlug (slug) {
        return _.where(this._players, {slug: slug})[0];
    }

    getPlayers () {
        return this._players;
    }

    _handleDispatcherEvent (payload) {
        // console.log(payload);
    }

}

// Export Players Store
export default new PlayersStore();
