package com.msorders.project.controller.contratcs_controller;

import org.springframework.web.bind.annotation.GetMapping;

public interface OrderControllerContract {
    @GetMapping
    String index();
}
