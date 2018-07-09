import { firestore, Request, Response } from "firebase-functions";
const cors = require("cors")({
  origin: true
});
function createUsername(req: Request, res: Response) {
  return cors(req, res, () => {
    res.status(200).send(JSON.stringify({"text": req.body}));
    console.log(req.body);
  }); 
}

export { createUsername };
