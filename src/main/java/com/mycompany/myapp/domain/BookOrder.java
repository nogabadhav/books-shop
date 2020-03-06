package com.mycompany.myapp.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "order_books")
public class BookOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Book book;

    @Column(name = "amount", nullable = false)
    @NotNull
    private Integer amount;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Book getBook() {
        return book;
    }

    public BookOrder setBook(Book book) {
        this.book = book;
        return this;
    }

    public Integer getAmount() {
        return amount;
    }

    public BookOrder setAmount(Integer amount) {
        this.amount = amount;
        return this;
    }

    public double price() {
        return book.getPrice() * amount;
    }
}
