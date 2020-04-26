package external;

import com.mycompany.myapp.domain.Payment;
import com.mycompany.myapp.service.PaymentException;

public class MockExternalPayment {
    public void pay(Payment payment) throws PaymentException {}
}
