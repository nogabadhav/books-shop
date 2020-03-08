package com.mycompany.myapp.service.dto;

import com.mycompany.myapp.domain.Book;

public class OrderReturnStatus {
    private boolean ok;
    private Book book;

    public boolean isOk() {
        return ok;
    }

    public OrderReturnStatus setOk(boolean ok) {
        this.ok = ok;
        return this;
    }

    public Book getBook() {
        return book;
    }

    public OrderReturnStatus setBook(Book book) {
        this.book = book;
        return this;
    }
}
