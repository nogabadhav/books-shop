package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.BookOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookOrderRepository extends JpaRepository<BookOrder, Long> {
}
