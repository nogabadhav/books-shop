package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.RecommendedBook;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecommendedBookRepository extends JpaRepository<RecommendedBook, Long> {
}
