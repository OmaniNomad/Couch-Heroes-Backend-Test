// responsible for forwarding http requests to the controllers

import { Express, Request, Response } from 'express';
import validateResource from "./middleware/validateResource";
import { registerUserSchema } from "./schemas/user.schema";
import { registerUserHandler } from "./controllers/user.controller";
import { sessionLoginSchema } from "./schemas/session.schema";
import { sessionLoginHandler, sessionLogoutHandler } from './controllers/session.controller';
import { fetchScoresHandler, updateUserScoreHandler } from './controllers/leaderboard.controller';
import requireUser from './middleware/requireUser';
import deserializedUser from './middleware/deserializedUser';

function routes(app: Express){
    app.get('/apiCheckStatus', (req: Request, res: Response) => res.sendStatus(200));

    app.post('/api/register', validateResource(registerUserSchema), registerUserHandler);

    app.post('/api/login', validateResource(sessionLoginSchema), sessionLoginHandler);

    app.delete('/api/logout', deserializedUser, requireUser, sessionLogoutHandler);

    app.get('/api/leaderboard/fetch', deserializedUser, requireUser, fetchScoresHandler);

    app.put('/api/leaderboard/update', deserializedUser, requireUser, updateUserScoreHandler);
}

export default routes;