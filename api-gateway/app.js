
import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import auth_routes from './src/routes/authRoutes.js';
import product_routes from './src/routes/productRoutes.js';
import user_routes from './src/routes/userRoutes.js';
import order_routes from './src/routes/orderRoutes.js';
import guard from './src/guard/index.js';

class App{

    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    routes(){
        this.server.use(auth_routes);
        this.server.use(guard)
        this.server.use(order_routes);
        this.server.use(product_routes);
        this.server.use(user_routes);
    }

    middlewares(){
        this.config();
    }

    config(){
        this.server.use(bodyParser.json());
    }

}

export default new App().server;