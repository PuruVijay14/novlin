const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

exports.setUpUser = functions.auth.user().onCreate(async user => {
    const uid = user.uid;

    await admin
      .firestore()
      .doc(`user/${uid}`)
      .set({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid,
        isSetUp: false
      }, {
        merge: true
      });
  }

);
