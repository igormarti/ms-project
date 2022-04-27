package com.msorders.project.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Objects;

@Document("orders")
public class Order {

    @Id
    private String id;

    private String user_id;
    private String user_name;
    private String user_email;
    private String product_id;
    private String product_name;
    private String product_price;
    private int product_quantity;

    public Order(){

    }

    public Order(String user_id, String user_name, String user_email, String product_id, String product_name, String product_price, Integer product_quantity){
        super();
        this.user_id = user_id;
        this.user_name = user_name;
        this.user_email = user_email;
        this.product_id = product_id;
        this.product_name = product_name;
        this.product_price = product_price;
        this.product_quantity = product_quantity;
    }

    public String getId() {
        return id;
    }

    public String getUser_id() {
        return user_id;
    }

    public String getUser_name() {
        return user_name;
    }

    public String getUser_email() {
        return user_email;
    }

    public String getProduct_id() {
        return product_id;
    }

    public String getProduct_name() {
        return product_name;
    }

    public String getProduct_price() {
        return product_price;
    }

    public int getProduct_quantity() {
        return product_quantity;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Order order = (Order) o;
        return id.equals(order.id);
    }

    @Override
    public String toString() {
        return "Order{" +
                "id='" + id + '\'' +
                ", user_id='" + user_id + '\'' +
                ", user_name='" + user_name + '\'' +
                ", user_email='" + user_email + '\'' +
                ", product_id='" + product_id + '\'' +
                ", product_name='" + product_name + '\'' +
                ", product_price='" + product_price + '\'' +
                ", product_quantity=" + product_quantity +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
