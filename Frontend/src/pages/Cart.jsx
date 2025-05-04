import React, { useState, useEffect } from 'react';
import './Cart.css';
import { Buffer } from 'buffer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  // Load cart and saved items from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const storedSaved = JSON.parse(localStorage.getItem('savedForLater')) || [];
    setCartItems(storedCart);
    setSavedItems(storedSaved);
  }, []);

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Handle quantity change
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = cartItems.map(item =>
      item._id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Remove item from saved for later
  const removeFromSaved = (id) => {
    const updatedSaved = savedItems.filter(item => item._id !== id);
    setSavedItems(updatedSaved);
    localStorage.setItem('savedForLater', JSON.stringify(updatedSaved));
  };

  // Move to Saved for Later
  const moveToSaved = (item) => {
    const updatedCart = cartItems.filter(cartItem => cartItem._id !== item._id);
    const updatedSaved = [...savedItems, { ...item, quantity: 1 }];
    setCartItems(updatedCart);
    setSavedItems(updatedSaved);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    localStorage.setItem('savedForLater', JSON.stringify(updatedSaved));
  };

  // Move back to cart
  const moveToCart = (item) => {
    const updatedSaved = savedItems.filter(savedItem => savedItem._id !== item._id);
    const updatedCart = [...cartItems, { ...item, quantity: 1 }];
    setCartItems(updatedCart);
    setSavedItems(updatedSaved);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    localStorage.setItem('savedForLater', JSON.stringify(updatedSaved));
  };

  return (
    <div className="cart-container">
      <h1>My Cart</h1>
      <div className="cart-content">
        {/* Cart Items Section */}
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map(item => (
              <div key={item._id} className="cart-item">
                <div className="cart-item-image">
                  <img
                    src={`data:image/png;base64,${Buffer.from(item.image.data).toString('base64')}`}
                    alt={item.name}
                  />
                </div>
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Seller: {item.seller}</p>
                  <p>Price: ${item.price}</p>
                  <div className="quantity-control">
                    <label>Qty:</label>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                      min="1"
                    />
                  </div>
                  <div className="cart-item-actions">
                    <button onClick={() => moveToSaved(item)} className="save-for-later-btn">
                      Save for Later
                    </button>
                    <button onClick={() => removeFromCart(item._id)} className="remove-btn">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Checkout Section */}
        <div className="checkout-section">
          <h2>Checkout</h2>
          <p>Have a coupon? <a href="#">Click here</a></p>
          {cartItems.map(item => (
            <div key={item._id} className="checkout-item">
              <p>{item.name}</p>
              <p>Qty: {item.quantity}</p>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className="checkout-total">
            <p>Discount: $0.00</p>
            <p>Total: ${calculateTotal()}</p>
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>

      {/* Saved for Later Section */}
      <div className="saved-for-later">
        <h2>Saved for Later</h2>
        {savedItems.length === 0 ? (
          <p>No items saved for later.</p>
        ) : (
          savedItems.map(item => (
            <div key={item._id} className="saved-item">
              <div className="saved-item-image">
                <img
                  src={`data:image/png;base64,${Buffer.from(item.image.data).toString('base64')}`}
                  alt={item.name}
                />
              </div>
              <div className="saved-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <div className="saved-item-actions">
                  <button onClick={() => moveToCart(item)} className="move-to-cart-btn">
                    Move to Cart
                  </button>
                  <button onClick={() => removeFromSaved(item._id)} className="remove-btn">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Discount Banner */}
      <div className="discount-banner">
        <p>Super Discount on More Than 100 USD</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Cart;