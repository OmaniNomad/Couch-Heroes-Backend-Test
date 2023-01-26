import { Request, Response } from 'express';
import { registerUser } from '../services/user.service';
import { RegisterUserInput } from '../schemas/user.schema';
import {omit} from 'lodash';

// handling a request to register a new user

export async function registerUserHandler(req: Request<{},{}, RegisterUserInput["body"]>, res: Response) {
    try{
        const user = await registerUser(req.body) // calling the register user service
        
        return res.send(omit(user, "password"));
    }
    catch(error: any){
        console.error(error);
    }
}