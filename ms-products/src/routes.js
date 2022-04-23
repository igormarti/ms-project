import {Router} from 'express';
import ProductController from './controller/ProductController.js';

const routes = new Router();

routes.get('/products', ProductController.all);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);

export default routes;