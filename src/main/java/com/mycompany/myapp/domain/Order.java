package com.mycompany.myapp.domain;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private OrderStatus orderStatus;

    @OneToMany
    private List<BookOrder> bookOrders = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public OrderStatus getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(OrderStatus orderStatus) {
        this.orderStatus = orderStatus;
    }

    public List<BookOrder> getBookOrders() {
        return bookOrders;
    }

    public double price() {
        return bookOrders.stream().mapToDouble(BookOrder::price).sum();
    }
}
