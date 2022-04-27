package com.msorders.project.queue;

import com.msorders.project.dto.OrderDto;
import com.msorders.project.model.Order;
import com.msorders.project.repository.OrderRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Queue {

    private static final Logger logger = LoggerFactory.getLogger(Queue.class);


    @Autowired
    OrderRepository orderRepository;

    @RabbitListener(queues = "order_queue")
    public void receive(OrderDto orderDto) {
        try {

            var order = orderRepository.save(
                    new Order(orderDto.user_id, orderDto.user_name, orderDto.user_email,
                            orderDto.product_id, orderDto.product_name, orderDto.product_price, orderDto.product_quantity)
            );
            System.out.println(order);

        }catch (Exception e) {
            System.out.println(e);
        }

    }
}
