package com.mycompany.myapp.service;

public class PaymentException extends RuntimeException {
    public PaymentException(String message) {
        super(message);
    }
}
