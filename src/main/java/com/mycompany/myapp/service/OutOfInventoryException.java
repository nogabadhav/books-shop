package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Book;

public class OutOfInventoryException extends RuntimeException {
    private Book book;

    public OutOfInventoryException(Book book) {
        this.book = book;
    }

    public Book getBook() {
        return book;
    }
}
