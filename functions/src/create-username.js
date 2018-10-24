const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require(`cors`)({
  origin: true,
});
const firestore = admin.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

const createUsername = functions.https.onRequest(async (request, response) => {
  return cors(request, response, async () => {
    response.setHeader('Access-Control-Allow-Origin', '*')

    /** Make sure the username doesn't exists */
    const query = await admin
      .firestore()
      .collection(`users`)
      .where(`username`, `==`, `${request.body.username}`)
      .get();

    console.log(query);
    if (query.empty) {
      /** write to firestore */
      admin
        .firestore()
        .doc(`users/${request.body.email}`)
        .set({
          isSetUp: true,
          username: request.body
        }, {
          merge: true
        });
      response.json({
        message: "success"
      });
    } else {
      response.json({
        message: "failure"
      });
    }
  });

  /** write to firestore */
  // admin.firestore().doc(`users/${request.body.email}`).set({
  //   isSetUp: true,
  //   userame: request.body
  // }, {
  //   merge: true
  // });
});


exports.createUsername = createUsername;
