import { Request, Response } from 'express';
import { validatePassword } from '../services/user.service';
import { createSession, updateSession } from '../services/session.service';
import { signJWT } from '../utils/jwt.utils';
import config from 'config';

export async function sessionLoginHandler(req: Request, res: Response){

    // validate user password
    const user = await validatePassword(req.body)

    if(!user){
        return res.status(401).send("Invalid email or password");
    }

    // create a session
    const session = await createSession(user._id, req.get("user-agent") || "");

    // create an access token
    const accessToken = signJWT(
        {...user, session: session._id},
        {expiresIn: config.get('accessTokenLifetime')} // token is valid for 1 minute
    );

    // return access token
    return res.send({accessToken});

}
  
  export async function sessionLogoutHandler(req: Request, res: Response) {
    const sessionId = res.locals.user.session;
  
    await updateSession({ _id: sessionId }, { valid: false });
  
    return res.send({accessToken: null});

}