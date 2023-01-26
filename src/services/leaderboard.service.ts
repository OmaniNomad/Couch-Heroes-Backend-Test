import { isNull } from 'lodash';
import { DocumentDefinition, FilterQuery } from 'mongoose';
import UserModel, { UserDocument } from '../models/user.model';

// find top 3 scores

export async function fetchTopScores() {
    try {
        let topScores = await UserModel.find().sort({ highScore: -1 }).limit(3)

        let scoresArray = topScores.map(user => ({ name: user.name, highScore: user.highScore }))

        console.log(scoresArray)

        return scoresArray
    }
    catch (error: any) {
        console.error(error);
    }
}


export async function updateUserScore({ _id, newHighScore }: { _id: string, newHighScore: number }) {
    try {

        let user = await UserModel.findById(_id)

        if (user != null) {
            if (user.highScore > newHighScore) {
                return false;
            }
            else {
                user.highScore = newHighScore
                let result = await user.save()
                return true;
            }
        }
    }
    catch (error: any) {
        console.error(error);
    }
}


// find a user in order to update their score?

// export async function findUser(query: FilterQuery<UserDocument>){
//     return UserModel.findOne(query).lean()
// }