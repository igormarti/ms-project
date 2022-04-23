import {Router} from 'express';


const routes = new Router();


routes.post('/users', async (req, res) => {
    try{
        const resp = await axios.post('http://ms-users:3002/users',req.body);
        return res.json(resp.data);
    } catch(e){
        return res.json(e)
    }
});

export default routes;