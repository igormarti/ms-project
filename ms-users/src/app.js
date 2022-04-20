import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes.js';
import './database/index.js';

class App{

    constructor(){
        this.server = express();
        this.middleware();
        this.routes();
    }

    routes(){
        this.server.use(routes)
    }

    middleware(){
        this.config();
    }

    config(){
        this.server.use(bodyParser.json());
    }

}

export default new App().server;