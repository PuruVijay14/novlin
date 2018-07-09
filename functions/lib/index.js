"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_functions_1 = require("firebase-functions");
var create_username_1 = require("./create-username");
// The `functions` exports
exports.createUsername = firebase_functions_1.https.onRequest(create_username_1.createUsername);
//# sourceMappingURL=index.js.map