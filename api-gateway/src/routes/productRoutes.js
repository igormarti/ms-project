import {Router} from 'express';
import axios from 'axios';

const routes = new Router();

routes.get('/products', async (req, res) => {
    try{
        const resp = await axios.get('http://ms-products:3001/products');
        return res.json(resp.data);
    } catch(e){
        return res.json(e)
    }
});

routes.post('/products', async (req, res) => {
    try{
        const resp = await axios.post('http://ms-products:3001/products',req.body);
        return res.json(resp.data);
    } catch(e){
        return res.json(e)
    }
});

export default routes;