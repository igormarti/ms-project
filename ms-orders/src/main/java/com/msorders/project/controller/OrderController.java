package com.msorders.project.controller;

import com.msorders.project.controller.contratcs_controller.OrderControllerContract;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/orders")
public class OrderController implements OrderControllerContract {

    @Override
    public String index() {
        return "Orders service says: Hello world Igor!";
    }
}
