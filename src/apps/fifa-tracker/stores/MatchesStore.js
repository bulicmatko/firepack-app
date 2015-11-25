
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Matches Store

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';

import BaseStore from '../../../../firebox/src/_lib/BaseStore';

import Firebase from '../firebase/Firebase';

/**
 *  Matches Store
 */
class MatchesStore extends BaseStore {

    constructor (props) {
        super(props);

        this._matches = [];

        this._DB = Firebase.child('matchs');
        this._DB.on('value', this._handleServerData.bind(this));

        this._onDispatcherEvent(this._handleDispatcherEvent.bind(this));
    }

    _handleServerData (matchs) {
        this._matches = [];

        matchs.forEach((match) => {
            this._matches.push(_.extend({}, match.val(), {id: match.key()}));
        });

        this._emitChange();
    }

    _addMatch (match) {
        // TODO: general and slug validation
        // TODO: Remove id (if exists)
        this._DB.push(match);
    }

    getMatchById (id) {
        return _.where(this._matches, {id: id})[0];
    }

    getMatches () {
        return this._matches;
    }

    _handleDispatcherEvent (payload) {
        // console.log(payload);
    }

}

// Export Matches Store
export default new MatchesStore();
