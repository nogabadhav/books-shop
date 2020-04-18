package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Book;
import com.mycompany.myapp.domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    List<Book> findByCategory(Category category);

    Optional<Book> findByName(String name);
}
