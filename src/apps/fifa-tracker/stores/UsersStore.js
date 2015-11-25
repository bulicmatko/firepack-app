
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Users Store

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';

import BaseStore from '../../../../firebox/src/_lib/BaseStore';

import Firebase from '../firebase/Firebase';

/**
 *  Users Store
 */
class UsersStore extends BaseStore {

    constructor (props) {
        super(props);

        this._users = [];

        this._DB = Firebase.child('users');
        this._DB.on('value', this._handleServerData.bind(this));

        this._onDispatcherEvent(this._handleDispatcherEvent.bind(this));
    }

    _handleServerData (users) {
        this._users = [];

        users.forEach((user) => {
            this._users.push(_.extend({}, user.val(), {id: user.key()}));
        });

        this._emitChange();
    }

    _addUser (user) {
        // TODO: general and slug validation
        // TODO: Remove id (if exists)
        this._DB.push(user);
    }

    getUserById (id) {
        return _.where(this._users, {id: id})[0];
    }

    getUserBySlug (slug) {
        return _.where(this._users, {slug: slug})[0];
    }

    getUsers () {
        return this._users;
    }

    _handleDispatcherEvent (payload) {
        // console.log(payload);
    }

}

// Export Users Store
export default new UsersStore();
