/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Push
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import firebase from 'firebase';

/**
 *Push */
export default () => {

  return new Promise((resolve, reject) => {


static databaseSet(path, value) {
  return firebase
    .database()
    .ref(path)
    .set(value);
}


  });

};
