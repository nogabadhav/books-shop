package com.mycompany.myapp.service.dto;

import com.mycompany.myapp.domain.Payment;

import java.util.List;

public class OrderDTO {
    private List<BookOrderDTO> bookOrders;
    private String userLogin;
    private Payment payment;

    public List<BookOrderDTO> getBookOrders() {
        return bookOrders;
    }

    public void setBookOrders(List<BookOrderDTO> bookOrders) {
        this.bookOrders = bookOrders;
    }

    public String getUserLogin() {
        return userLogin;
    }

    public void setUserLogin(String userLogin) {
        this.userLogin = userLogin;
    }

    public Payment getPayment() {
        return payment;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
    }
}
