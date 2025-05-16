import React, { useEffect, useState } from 'react';
import NavbarComponent from '../../components/nav/nav';
import FooterComponent from '../../components/footer/footer';
import './Shop.css';

export default function Shop() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('savedCart');
    return saved ? JSON.parse(saved) : [];
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const saveCart = (updatedCart) => {
    localStorage.setItem('savedCart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const addToCart = (id, name, price, quantity) => {
    const existing = cart.find((item) => item.id === id);
    const updatedCart = existing
      ? cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        )
      : [...cart, { id, name, price, quantity }];

    saveCart(updatedCart);
  };

  const removeFromCart = (name) => {
    const updatedCart = cart.filter((item) => item.name !== name);
    saveCart(updatedCart);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const checkout = () => {
    alert('Redirecting to payment...');
    saveCart([]);
    setIsDrawerOpen(false);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="shop-wrapper">
      <NavbarComponent />

      <div className="shop-header">
        <h1>Healthy Life Shop</h1>
      </div>

      {/* Product Grid */}
      <div className="products-grid">
         <div className="products-grid">
  {[1, 2, 3, 4, 5, 6, 10, 8, 9, 11].map((id) => (
    <div className="product-card" key={id}>
      <img
        src={`/src/assets/explore/Nutrition ${id}.svg`}
        alt={`Product ${id}`}
      />
      <h3>Product {id}</h3>
      <p className="price">$19.99</p>
      <input
        type="number"
        min={1}
        defaultValue={1}
        className="quantity-input"
        id={`qty-${id}`}
      />
      <button
        onClick={() =>
          addToCart(
            id,
            `Product ${id}`,
            19.99,
            parseInt(document.getElementById(`qty-${id}`).value || 1)
          )
        }
      >
        Add to Cart
      </button>
    </div>
  ))}
</div>
      </div>

      {/* Cart Summary */}
      <div className="cart-summary">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <div>
                    <p><strong>{item.name}</strong></p>
                    <p>{item.quantity} x ${item.price.toFixed(2)}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.name)}>Remove</button>
                </li>
              ))}
            </ul>
            <p className="total">Total: ${totalPrice.toFixed(2)}</p>
            <button onClick={checkout}>Checkout</button>
          </>
        )}
      </div>

      {/* Floating Cart Button */}
      <div
        className="floating-cart"
        onClick={toggleDrawer}
      >
        🛒 Cart <span className="cart-count">{totalCount}</span>
      </div>

      {/* Slide-in Cart Drawer */}
      <div
        className={`cart-drawer ${isDrawerOpen ? 'open' : ''}`}
      >
        <div className="drawer-header">
          <h2>Cart</h2>
          <button onClick={toggleDrawer}>Close</button>
        </div>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <div>
                <p>{item.quantity}x {item.name}</p>
                <p>${item.price.toFixed(2)} ea</p>
              </div>
              <button onClick={() => removeFromCart(item.name)}>Remove</button>
            </li>
          ))}
        </ul>
        <p className="total">Total: ${totalPrice.toFixed(2)}</p>
        <button onClick={checkout}>Checkout</button>
      </div>

      <FooterComponent />
    </div>
  );
}