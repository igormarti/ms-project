import {Router} from 'express';
import UserController from './controller/UserController.js';

const routes = new Router();

routes.post('/users', UserController.store);
routes.get('/users/:id', UserController.show);

routes.post('/login', UserController.singIn);

export default routes;