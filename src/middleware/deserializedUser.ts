import { get } from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { verifyJWT } from '../utils/jwt.utils';

// This middleware adds the user to the request object so that we can easily get a user's ID from any request object

const deserializedUser = async (req: Request, res: Response, next: NextFunction) =>{
    const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "") // using regex to remove the word "bearer" from the token
    
    if(!accessToken){
        return next();
    }

    const {decoded, expired} = verifyJWT(accessToken)

    if(decoded){
        res.locals.user = decoded
        return next();
    }

    if(expired){
        res.locals.user = expired
        return res.status(403).send("The access token has expired. Please login again")
    }

    return next();
};

export default deserializedUser;