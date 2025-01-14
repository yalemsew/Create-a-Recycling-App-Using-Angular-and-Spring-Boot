package com.example.backend.repo;

import com.example.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

// Task 3: Write your code here
public interface ProductRepository extends JpaRepository<Product, Long> {
    void deleteById(Long id);
    Optional<Product> findById (Long id);
}
