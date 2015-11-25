
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Goals Store

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';

import BaseStore from '../../../../firebox/src/_lib/BaseStore';

import Firebase from '../firebase/Firebase';

/**
 *  Goals Store
 */
class GoalsStore extends BaseStore {

    constructor (props) {
        super(props);

        this._goals = [];

        this._DB = Firebase.child('goals');
        this._DB.on('value', this._handleServerData.bind(this));

        this._onDispatcherEvent(this._handleDispatcherEvent.bind(this));
    }

    _handleServerData (goals) {
        this._goals = [];

        goals.forEach((goal) => {
            this._goals.push(_.extend({}, goal.val(), {id: goal.key()}));
        });

        this._emitChange();
    }

    _addGoal (goal) {
        // TODO: general and slug validation
        // TODO: Remove id (if exists)
        this._DB.push(goal);
    }

    getGoalById (id) {
        return _.where(this._goals, {id: id})[0];
    }

    getGoals () {
        return this._goals;
    }

    _handleDispatcherEvent (payload) {
        // console.log(payload);
    }

}

// Export Goals Store
export default new GoalsStore();
