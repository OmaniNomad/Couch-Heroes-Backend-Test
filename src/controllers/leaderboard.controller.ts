import { Request, Response } from 'express';
import { fetchTopScores , updateUserScore } from '../services/leaderboard.service';

// handling a request to fetch the top 3 scores from all users

export async function fetchScoresHandler(req: Request, res: Response){
    try{
        const scores = await fetchTopScores()

        return res.send(scores) // return resulting array with name: score pairs as a json response
    }
    catch(error: any){
        console.error(error);
    }
    
}

export async function updateUserScoreHandler(req: Request, res: Response){
    try{
        const userScore = await updateUserScore(req.body)

        if (userScore) {
            return res.send("Score has been updated")
        }
        else return res.send("Score is lower than high score. No changes are made")
    }
    catch(error: any){
        console.error(error);
    }
    
}



