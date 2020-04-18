package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Author;
import com.mycompany.myapp.domain.Book;
import com.mycompany.myapp.domain.Category;
import com.mycompany.myapp.domain.RecommendedBook;
import com.mycompany.myapp.repository.AuthorsRepository;
import com.mycompany.myapp.repository.BookRepository;
import com.mycompany.myapp.repository.CategoryRepository;
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
    private CategoryRepository categoryRepository;
    private RecommendedBookRepository recommendedBookRepository;
    private AuthorsRepository authorsRepository;

    @Autowired
    public BookService(BookRepository bookRepository, RecommendedBookRepository recommendedBookRepository,
                       CategoryRepository categoryRepository, AuthorsRepository authorsRepository) {
        this.bookRepository = bookRepository;
        this.recommendedBookRepository = recommendedBookRepository;
        this.categoryRepository = categoryRepository;
        this.authorsRepository = authorsRepository;
    }

    public List<Book> getRecommended() {
        return recommendedBookRepository.findAll().stream().map(RecommendedBook::getBook).collect(Collectors.toList());
    }

    public List<Book> getByCategory(String categoryName) {
        return categoryRepository.findByName(categoryName)
            .map(c -> bookRepository.findByCategory(c))
            .orElse(new ArrayList<>());
    }

    public List<Book> getAll() {
        return bookRepository.findAll();
    }

    public void updateBook(Book book) {
        Optional<Category> category = categoryRepository.findByName(book.getCategory().getName());
        Optional<Author> author = authorsRepository.findByName(book.getAuthor().getName());
        book.setAuthor(author.orElse(null));
        book.setCategory(category.orElse(null));
        bookRepository.save(book);
    }
}
