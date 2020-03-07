package com.mycompany.myapp.service.dto;

import java.util.Date;
import java.util.List;

public class OrderStatusDTO {
    private String status;
    private Date date;
    private List<BookOrderDTO> books;

    public String getStatus() {
        return status;
    }

    public OrderStatusDTO setStatus(String status) {
        this.status = status;
        return this;
    }

    public OrderStatusDTO setDate(Date date) {
        this.date = date;
        return this;
    }

    public OrderStatusDTO setBooks(List<BookOrderDTO> books) {
        this.books = books;
        return this;
    }

    public Date getDate() {
        return date;
    }

    public List<BookOrderDTO> getBooks() {
        return books;
    }
}
