package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Book;
import com.mycompany.myapp.domain.BookOrder;
import com.mycompany.myapp.domain.Order;
import com.mycompany.myapp.repository.*;
import com.mycompany.myapp.service.dto.BookOrderDTO;
import com.mycompany.myapp.service.dto.OrderDTO;
import com.mycompany.myapp.service.dto.OrderStatusDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class OrderService {
    private UserRepository userRepository;
    private OrderStatusRepository orderStatusRepository;
    private BookRepository bookRepository;
    private OrderRepository orderRepository;
    private BookOrderRepository bookOrderRepository;
    private PaymentService paymentService;

    @Autowired
    public OrderService(UserRepository userRepository, OrderStatusRepository orderStatusRepository,
                        BookRepository bookRepository, OrderRepository orderRepository,
                        BookOrderRepository bookOrderRepository,
                        PaymentService paymentService) {
        this.userRepository = userRepository;
        this.orderStatusRepository = orderStatusRepository;
        this.bookRepository = bookRepository;
        this.orderRepository = orderRepository;
        this.bookOrderRepository = bookOrderRepository;
        this.paymentService = paymentService;
    }

    public void order(OrderDTO orderDTO) {
        userRepository.findOneByLogin(orderDTO.getUserLogin()).ifPresent(user -> {
            paymentService.pay(orderDTO.getPayment());
            Order order = new Order();
            order.setOrderStatus(orderStatusRepository.findByStatus("NEW"));
            order.setUser(user);
            order.setBookOrders(toBookOrders(orderDTO));
            bookOrderRepository.saveAll(order.getBookOrders());
            orderRepository.save(order);
            updateInventory(order);
        });
    }

    private void updateInventory(Order order) {
        order.getBookOrders().forEach(bookOrder -> {
            Book book = bookOrder.getBook();
            book.setInventory(book.getInventory() - bookOrder.getAmount());
            bookRepository.save(book);
        });
    }

    private List<BookOrder> toBookOrders(OrderDTO orderDTO) {
        return orderDTO.getBookOrders().stream()
            .map(this::toBookOrder)
            .collect(Collectors.toList());
    }

    private BookOrder toBookOrder(BookOrderDTO t) {
        Optional<Book> book = bookRepository.findByName(t.getName());
        if (book.isPresent() && t.getAmount() > book.get().getInventory()) {
            throw new OutOfInventoryException(book.get());
        }
        return new BookOrder().setAmount(t.getAmount()).setBook(book.orElse(null));
    }

    public List<OrderStatusDTO> getOrders() {
        return orderRepository.findAll().stream().map(this::toOrderStatus).collect(Collectors.toList());
    }

    private OrderStatusDTO toOrderStatus(Order o) {
        return new OrderStatusDTO()
            .setStatus(o.getOrderStatus().getStatus())
            .setDate(o.getTime().toString())
            .setLogin(o.getUser().getLogin())
            .setPrice(o.price())
            .setBooks(o.getBookOrders().stream().map(this::toBookOrderDTO).collect(Collectors.toList()));
    }

    private BookOrderDTO toBookOrderDTO(BookOrder b) {
        return new BookOrderDTO().setAmount(b.getAmount()).setName(b.getBook().getName());
    }
}
