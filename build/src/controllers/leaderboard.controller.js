"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserScoreHandler = exports.fetchScoresHandler = void 0;
const leaderboard_service_1 = require("../services/leaderboard.service");
// handling a request to fetch the top 3 scores from all users
function fetchScoresHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const scores = yield (0, leaderboard_service_1.fetchTopScores)();
            return res.send(scores); // return resulting array with name: score pairs as a json response
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.fetchScoresHandler = fetchScoresHandler;
function updateUserScoreHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userScore = yield (0, leaderboard_service_1.updateUserScore)(req.body);
            if (userScore) {
                return res.send("Score has been updated");
            }
            else
                return res.send("Score is lower than high score. No changes are made");
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.updateUserScoreHandler = updateUserScoreHandler;
