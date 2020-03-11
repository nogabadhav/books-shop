package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AuthorsRepository extends JpaRepository<Author, Long> {
    Optional<Author> findByName(String name);
}
