package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Book;
import com.mycompany.myapp.service.BookService;
import com.mycompany.myapp.service.OrderService;
import com.mycompany.myapp.service.dto.OrderDTO;
import com.mycompany.myapp.service.dto.OrderStatusDTO;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookResource {

    private BookService bookService;
    private OrderService orderService;

    public BookResource(BookService bookService, OrderService orderService) {
        this.bookService = bookService;
        this.orderService = orderService;
    }

    @GetMapping("/recommended")
    public List<Book> getRecommended() {
        return bookService.getRecommended();
    }

    @GetMapping("/category/{name}")
    public List<Book> getByCatagory(@PathVariable String name) {
        return bookService.getByCategory(name);
    }

    @GetMapping("/all")
    public List<Book> getAll() {
        return bookService.getAll();
    }

    @PostMapping("/order")
    public void order(@RequestBody OrderDTO orderDTO) {
        orderService.order(orderDTO);
    }

    @GetMapping("/order/{login}")
    public List<OrderStatusDTO> getOrdersStatus(@PathVariable String login) {
        return orderService.getOrders(login);
    }
}
