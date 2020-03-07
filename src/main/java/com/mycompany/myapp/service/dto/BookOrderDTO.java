package com.mycompany.myapp.service.dto;

public class BookOrderDTO {
    private String name;
    private int amount;

    public String getName() {
        return name;
    }

    public BookOrderDTO setName(String name) {
        this.name = name;
        return this;
    }

    public int getAmount() {
        return amount;
    }

    public BookOrderDTO setAmount(int amount) {
        this.amount = amount;
        return this;
    }
}
