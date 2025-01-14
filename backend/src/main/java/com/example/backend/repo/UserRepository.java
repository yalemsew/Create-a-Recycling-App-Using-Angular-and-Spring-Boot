package com.example.backend.repo;

import com.example.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

//Task 3: Write your code here
public interface UserRepository extends JpaRepository<User, Long> {
    void deleteById(Long id);
    User findByUsername (String username);
    Optional<User> findById (Long id);
}
