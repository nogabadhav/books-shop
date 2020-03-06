package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Catagory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CatagoryRepository extends JpaRepository<Catagory, Long> {
    Optional<Catagory> findByName(String catagoryName);
}
