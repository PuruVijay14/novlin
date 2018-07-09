"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cors = require("cors")({
    origin: true
});
function createUsername(req, res) {
    return cors(req, res, function () {
        res.status(200).send(JSON.stringify({ "text": req.body }));
        console.log(req.body);
    });
}
exports.createUsername = createUsername;
//# sourceMappingURL=create-username.js.map