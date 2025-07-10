import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart-page">
      <h2>Your Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item, i) => (
            <li key={i}>
              <strong>{item.item}</strong> from <em>{item.restaurant}</em>
              <button onClick={() => removeFromCart(i)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
