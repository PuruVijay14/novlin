import { https } from "firebase-functions";
import { createUsername as cUsername } from "./create-username";


// The `functions` exports
export const createUsername = https.onRequest(cUsername);
