package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.BookOrder;
import com.mycompany.myapp.domain.Order;
import com.mycompany.myapp.repository.BookRepository;
import com.mycompany.myapp.repository.OrderRepository;
import com.mycompany.myapp.repository.OrderStatusRepository;
import com.mycompany.myapp.repository.UserRepository;
import com.mycompany.myapp.service.dto.BookOrderDTO;
import com.mycompany.myapp.service.dto.OrderDTO;
import com.mycompany.myapp.service.dto.OrderStatusDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {
    private UserRepository userRepository;
    private OrderStatusRepository orderStatusRepository;
    private BookRepository bookRepository;
    private OrderRepository orderRepository;

    @Autowired
    public OrderService(UserRepository userRepository, OrderStatusRepository orderStatusRepository, BookRepository bookRepository, OrderRepository orderRepository) {
        this.userRepository = userRepository;
        this.orderStatusRepository = orderStatusRepository;
        this.bookRepository = bookRepository;
        this.orderRepository = orderRepository;
    }

    public void order(OrderDTO orderDTO) {
        userRepository.findOneByLogin(orderDTO.getUserLogin()).ifPresent(user -> {
            Order order = new Order();
            order.setOrderStatus(orderStatusRepository.findByStatus("NEW"));
            order.setUser(user);
            order.setBookOrders(toBookOrders(orderDTO));
            orderRepository.save(order);
        });
    }

    private List<BookOrder> toBookOrders(OrderDTO orderDTO) {
        return orderDTO.getBookOrders().stream()
            .map(this::toBookOrder)
            .collect(Collectors.toList());
    }

    private BookOrder toBookOrder(BookOrderDTO t) {
        return new BookOrder().setAmount(t.getAmount()).setBook(bookRepository.findByName(t.getName()).orElse(null));
    }

    public List<OrderStatusDTO> getOrders(String login) {
        return orderRepository.findByUser(userRepository.findOneByLogin(login).orElse(null))
            .stream().map(this::toOrderStatus).collect(Collectors.toList());
    }

    private OrderStatusDTO toOrderStatus(Order o) {
        return new OrderStatusDTO()
            .setStatus(o.getOrderStatus().getStatus())
            .setDate(o.getTime())
            .setBooks(o.getBookOrders().stream().map(this::toBookOrderDTO).collect(Collectors.toList()));
    }

    private BookOrderDTO toBookOrderDTO(BookOrder b) {
        return new BookOrderDTO().setAmount(b.getAmount()).setName(b.getBook().getName());
    }
}
