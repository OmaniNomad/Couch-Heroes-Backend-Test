import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import config from 'config'
import DBconnect from './utils/connect'
import routes from './routes'

const port = config.get<number>('port');
const host = config.get<string>('host');

// creating the express app by calling a new instance of express
const app = express();

app.use(express.json());

// checking that app is listening for requests
app.listen(port, async () => {
    console.log(`Server listening at ${host}:${port}`)

    await DBconnect();
    
    routes(app);
});
