package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Payment;

public interface PaymentService {
    void pay(Payment payment) throws PaymentException;
}
