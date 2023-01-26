// database connection

import mongoose from 'mongoose';
import config from 'config';

async function DBconnect() {
    const dbUri = config.get<string>('dbUri')
    
    try {
        await mongoose.connect(dbUri);
        console.log('Connected to the DB')
    } 
    catch (error: any) {
       console.error(error)
       console.error("Couldn't connect to the DB");
       process.exit(1);
    }
}

export default DBconnect;