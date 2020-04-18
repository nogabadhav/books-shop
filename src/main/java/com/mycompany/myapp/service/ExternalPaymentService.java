package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Payment;
import org.springframework.stereotype.Service;

@Service
public class ExternalPaymentService implements PaymentService {
    @Override
    public void pay(Payment payment) throws PaymentException {
    }
}
