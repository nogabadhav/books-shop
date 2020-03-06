package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Book;
import com.mycompany.myapp.service.BookService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookResource {

    private BookService bookService;

    public BookResource(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/recommended")
    public List<Book> getRecommended() {
        return bookService.getRecommended();
    }
}
