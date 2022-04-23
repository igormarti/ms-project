import {Router} from 'express';
import queue from '../queue/queue.js';
import userService from '../services/userService.js';
import productService from '../services/productService.js';

const routes = new Router();


routes.post('/orders', async (req, res) => {
    try{
        const {productId, quantity} = req.body;
        const user = await userService.getUserByID(req.userId);
        const product = await productService.getProductByID(productId);

        const content = JSON.stringify(
            {
                user_id: user.id,
                user_name: user.name, 
                user_email: user.email, 
                product_id: product.id,
                product_name: product.name,
                product_price: product.price,
                product_quantity: quantity
            }
        );
        const exchangeName = "order_ex";
        const queueName = "order_queue";

        // open connection
        const connection = await queue.connect();
        // create channel
        const ch = await queue.createChannel(connection);
        // create exchange
        await queue.createExchange(exchangeName, ch);
        // create queue
        await queue.createQueue(queueName, ch);
        // linking queue to exchange
        await queue.bindQueueToExch(ch, queueName, exchangeName);
        // send message
        await queue.notify(exchangeName, ch, content);
        // close connection
        queue.closeConnection(connection);

        return res.json({msg: "Compra enviada", status: true})

    } catch(e){
        return res.json({msg:e.message, status: false})
    }
});

export default routes;