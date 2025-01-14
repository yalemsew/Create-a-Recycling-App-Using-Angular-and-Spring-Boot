package com.example.backend.repo;

import com.example.backend.model.cart.CartItem;
import com.example.backend.model.cart.CartItemPK;
import org.springframework.data.jpa.repository.JpaRepository;

// Task 3: Write your code here
public interface CartItemRepository extends JpaRepository <CartItem, CartItemPK> {
}
