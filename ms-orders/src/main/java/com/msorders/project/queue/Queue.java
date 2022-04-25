package com.msorders.project.queue;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

@Component
public class Queue {

    @RabbitListener(queues = "order_queue")
    public void receive(@Payload String body){
        System.out.println("Message received");
        System.out.println(body);
    }
}
