import amqp from 'amqplib';

class Queue{

    async connect(){
        return await amqp.connect('amqp://rabbitmq');
    }

    async createChannel(connection){
        return await connection.createChannel()
    }

    async createExchange(exchangeName, channel, type = 'direct', durable = true){
        await channel.assertExchange(exchangeName, type, {
            durable: durable
        });
    }

    async createQueue(queueName, channel, durable = true){
        await channel.assertQueue(queueName, {durable: durable});
    }

    async bindQueueToExch(channel, queueName, exchangeName, routing=""){
        await channel.bindQueue(queueName, exchangeName, routing);
    }

    async notify(exchangeName, channel, msg, routing=''){
        await channel.publish(exchangeName, routing, Buffer.from(msg), {
            header:{
                contentType: 'applications/json'
            }
        });
        console.log(" [x] Sent %s", msg);
    }

    async notifyQueue(queueName, channel, msg){
        await channel.sendToQueue(queueName, Buffer.from(msg), {
            header:{
                contentType: 'applications/json'
            }
        });
        console.log(" [x] Sent %s", msg);
    }

    closeConnection(connection){
        setTimeout(function() {
            connection.close();
            console.log("Connection closed");
          }, 500);
    }

}

export default new Queue();