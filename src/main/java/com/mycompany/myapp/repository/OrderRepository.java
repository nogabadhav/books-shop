package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Order;
import com.mycompany.myapp.domain.User;
import com.mycompany.myapp.service.dto.OrderStatusDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByUser(User user);
}
