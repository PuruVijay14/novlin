const functions = require("firebase-functions");
const admin = require("firebase-admin");

const setUpUser = functions.auth.user().onCreate(async user => {
  console.log(user);
  const userObject = {
    displayName: user.displayName,
    email: user.email,
    photoUrl: user.photoURL,
    createdOn: user.metadata.creationTime,
    uid: user.uid,
    isSetUp: false,
    username: ''
  };
  return await admin
    .firestore()
    .doc(`users/${user.uid}`).set(
      userObject, {
        merge: true
      }
    );
});

exports.setUpUser = setUpUser;
