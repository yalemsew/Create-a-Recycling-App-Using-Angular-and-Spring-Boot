package com.example.backend.model.cart;

import com.example.backend.model.Product;
import com.example.backend.model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import jakarta.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "cart_item")
public class CartItem {
    // Task 2: Update code for CartItem here
    @EmbeddedId
    @JsonIgnore
    private CartItemPK pk;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date addedOn = new Date();

    @Column(nullable = false)
    private int quantity = 1;

    public CartItem () {

    }

    public CartItem (User user, Product product, int quantity) {
        pk = new CartItemPK();
        pk.setUser(user);
        pk.setProduct(product);
        this.quantity = quantity;
    }

    @Transient
    public Product getProduct () {
        return pk.getProduct();
    }

    @Transient
    public double getTotalPrice () {
        return quantity * getProduct().getPrice();
    }

    public CartItemPK getPk() {
        return pk;
    }

    public void setPk(CartItemPK pk) {
        this.pk = pk;
    }


    public Date getAddedOn() {
        return addedOn;
    }

    public void setAddedOn(Date addedOn) {
        this.addedOn = addedOn;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;

        if (o == null || getClass() != o.getClass())
            return false;

        CartItem that = (CartItem) o;
        return Objects.equals(pk.getUser().getId(), that.pk.getUser().getId()) &&
                Objects.equals(getProduct().getId(), that.getProduct().getId());
    }
}
