
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Cards Store

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


import _ from 'lodash';

import BaseStore from '../../../../firebox/src/_lib/BaseStore';

import Firebase from '../firebase/Firebase';

/**
 *  Cards Store
 */
class CardsStore extends BaseStore {

    constructor (props) {
        super(props);

        this._cards = [];

        this._DB = Firebase.child('cards');
        this._DB.on('value', this._handleServerData.bind(this));

        this._onDispatcherEvent(this._handleDispatcherEvent.bind(this));
    }

    _handleServerData (cards) {
        this._cards = [];

        cards.forEach((card) => {
            this._cards.push(_.extend({}, card.val(), {id: card.key()}));
        });

        this._emitChange();
    }

    _addCard (card) {
        // TODO: general and slug validation
        // TODO: Remove id (if exists)
        this._DB.push(card);
    }

    getCardById (id) {
        return _.where(this._cards, {id: id})[0];
    }

    getCards () {
        return this._cards;
    }

    _handleDispatcherEvent (payload) {
        // console.log(payload);
    }

}

// Export Cards Store
export default new CardsStore();
