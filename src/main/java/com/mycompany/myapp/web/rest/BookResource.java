package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Book;
import com.mycompany.myapp.service.BookService;
import com.mycompany.myapp.service.OrderService;
import com.mycompany.myapp.service.OutOfInventoryException;
import com.mycompany.myapp.service.PaymentException;
import com.mycompany.myapp.service.dto.OrderDTO;
import com.mycompany.myapp.service.dto.OrderReturnStatus;
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
    public List<Book> getByCategory(@PathVariable String name) {
        return bookService.getByCategory(name);
    }

    @GetMapping("/all")
    public List<Book> getAll() {
        return bookService.getAll();
    }

    @PostMapping("/order")
    public OrderReturnStatus order(@RequestBody OrderDTO orderDTO) {
        try {
            orderService.order(orderDTO);
            return new OrderReturnStatus().setOk(true);
        } catch (OutOfInventoryException e) {
            return new OrderReturnStatus().setMessage("אין מספיק במלאי את הספר " + e.getBook().getName()).setOk(false);
        } catch (PaymentException e) {
            return new OrderReturnStatus().setMessage("התשלום לא הצליח: " + e.getMessage()).setOk(false);
        }
    }

    @GetMapping("/orders")
    public List<OrderStatusDTO> getOrdersStatus() {
        return orderService.getOrders();
    }

    @PutMapping("/update")
    public void updateBook(@RequestBody Book book) {
        bookService.updateBook(book);
    }

    @PutMapping("/updateOrder")
    public void updateOrder(@RequestBody OrderStatusDTO orderStatusDTO) {
        orderService.updateOrderStatus(orderStatusDTO);
    }
}
