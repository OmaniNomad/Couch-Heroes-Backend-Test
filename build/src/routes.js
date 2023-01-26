"use strict";
// responsible for forwarding http requests to the controllers
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateResource_1 = __importDefault(require("./middleware/validateResource"));
const user_schema_1 = require("./schemas/user.schema");
const user_controller_1 = require("./controllers/user.controller");
const session_schema_1 = require("./schemas/session.schema");
const session_controller_1 = require("./controllers/session.controller");
const leaderboard_controller_1 = require("./controllers/leaderboard.controller");
const requireUser_1 = __importDefault(require("./middleware/requireUser"));
const deserializedUser_1 = __importDefault(require("./middleware/deserializedUser"));
function routes(app) {
    app.get('/apiCheckStatus', (req, res) => res.sendStatus(200));
    app.post('/api/register', (0, validateResource_1.default)(user_schema_1.registerUserSchema), user_controller_1.registerUserHandler);
    app.post('/api/login', (0, validateResource_1.default)(session_schema_1.sessionLoginSchema), session_controller_1.sessionLoginHandler);
    app.delete('/api/logout', deserializedUser_1.default, requireUser_1.default, session_controller_1.sessionLogoutHandler);
    app.get('/api/leaderboard/fetch', deserializedUser_1.default, requireUser_1.default, leaderboard_controller_1.fetchScoresHandler);
    app.put('/api/leaderboard/update', deserializedUser_1.default, requireUser_1.default, leaderboard_controller_1.updateUserScoreHandler);
}
exports.default = routes;
