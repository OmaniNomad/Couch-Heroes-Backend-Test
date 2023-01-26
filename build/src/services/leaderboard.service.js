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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserScore = exports.fetchTopScores = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
// find top 3 scores
function fetchTopScores() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let topScores = yield user_model_1.default.find().sort({ highScore: -1 }).limit(3);
            let scoresArray = topScores.map(user => ({ name: user.name, highScore: user.highScore }));
            console.log(scoresArray);
            return scoresArray;
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.fetchTopScores = fetchTopScores;
function updateUserScore({ _id, newHighScore }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let user = yield user_model_1.default.findById(_id);
            if (user != null) {
                if (user.highScore > newHighScore) {
                    return false;
                }
                else {
                    user.highScore = newHighScore;
                    let result = yield user.save();
                    return true;
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.updateUserScore = updateUserScore;
// find a user in order to update their score?
// export async function findUser(query: FilterQuery<UserDocument>){
//     return UserModel.findOne(query).lean()
// }
