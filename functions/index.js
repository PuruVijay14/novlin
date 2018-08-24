const functions = require(`firebase-functions`);
const admin = require(`firebase-admin`);

/** Initialize firebase app */
admin.initializeApp(functions.config().firebase);

// Imports
const setUpUser = require(`./src/setup-user`).setUpUser;
const createUsername = require(`./src/create-username`).createUsername;
const SendUserCreatedMail = require(`./src/send-user-created-mail`).SendUserCreatedMail;

exports.setUpUser = setUpUser;
exports.createUsername = createUsername;
exports.SendUserCreatedMail = SendUserCreatedMail;
