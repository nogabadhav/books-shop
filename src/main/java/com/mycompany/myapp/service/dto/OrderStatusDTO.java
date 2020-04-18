package com.mycompany.myapp.service.dto;

import java.util.List;

public class OrderStatusDTO {
    private long id;
    private String status;
    private String date;
    private List<BookOrderDTO> books;
    private String login;
    private double price;

    public String getStatus() {
        return status;
    }

    public OrderStatusDTO setStatus(String status) {
        this.status = status;
        return this;
    }

    public OrderStatusDTO setDate(String date) {
        this.date = date;
        return this;
    }

    public OrderStatusDTO setBooks(List<BookOrderDTO> books) {
        this.books = books;
        return this;
    }

    public String getDate() {
        return date;
    }

    public List<BookOrderDTO> getBooks() {
        return books;
    }

    public String getLogin() {
        return login;
    }

    public OrderStatusDTO setLogin(String login) {
        this.login = login;
        return this;
    }

    public double getPrice() {
        return price;
    }

    public OrderStatusDTO setPrice(double price) {
        this.price = price;
        return this;
    }

    public long getId() {
        return id;
    }

    public OrderStatusDTO setId(long id) {
        this.id = id;
        return this;
    }
}
