package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Author;
import com.mycompany.myapp.domain.Book;
import com.mycompany.myapp.domain.Catagory;
import com.mycompany.myapp.domain.RecommendedBook;
import com.mycompany.myapp.repository.AuthorsRepository;
import com.mycompany.myapp.repository.BookRepository;
import com.mycompany.myapp.repository.CatagoryRepository;
import com.mycompany.myapp.repository.RecommendedBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BookService {

    private BookRepository bookRepository;
    private CatagoryRepository catagoryRepository;
    private RecommendedBookRepository recommendedBookRepository;
    private AuthorsRepository authorsRepository;

    @Autowired
    public BookService(BookRepository bookRepository, RecommendedBookRepository recommendedBookRepository,
                       CatagoryRepository catagoryRepository, AuthorsRepository authorsRepository) {
        this.bookRepository = bookRepository;
        this.recommendedBookRepository = recommendedBookRepository;
        this.catagoryRepository = catagoryRepository;
        this.authorsRepository = authorsRepository;
    }

    public List<Book> getRecommended() {
        return recommendedBookRepository.findAll().stream().map(RecommendedBook::getBook).collect(Collectors.toList());
    }

    public List<Book> getByCategory(String categoryName) {
        return catagoryRepository.findByName(categoryName)
            .map(c -> bookRepository.findByCatagory(c))
            .orElse(new ArrayList<>());
    }

    public List<Book> getAll() {
        return bookRepository.findAll();
    }

    public void updateBook(Book book) {
        Optional<Catagory> category = catagoryRepository.findByName(book.getCatagory().getName());
        Optional<Author> author = authorsRepository.findByName(book.getAuthor().getName());
        book.setAuthor(author.orElse(null));
        book.setCatagory(category.orElse(null));
        bookRepository.save(book);
    }
}
