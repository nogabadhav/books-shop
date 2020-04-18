package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Payment;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class ExternalPaymentService implements PaymentService {
    @Override
    public void pay(Payment payment) throws PaymentException {
        if (LocalDate.parse(payment.getExpirationDate()).isBefore(LocalDate.now())) {
            throw new PaymentException("הכרטיס פג תוקף");
        }
    }
}
