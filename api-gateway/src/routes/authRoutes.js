import {Router} from 'express';
import jwt from 'jsonwebtoken';
import axios from 'axios';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.send('Welcome to api gateway.');
});

routes.post('/login', async (req, res) => {
    try{
        const resp = await axios.post('http://ms-users:3002/login', req.body);

        if(resp.data.status && resp.data.user){
           return res.status(201).json({
               ...resp.data.user,
               token: jwt.sign({id: resp.data.user.id}, process.env.secret, {
                   expiresIn: '7d',
               })
           })
        }

        return res.json(resp.data);
    } catch(e){
        return res.json(e)
    }
});

export default routes;