import React, { useState, useEffect } from "react";

const mockMenu = [
  { id: 1, name: "Burger", price: 5, image: "🍔" },
  { id: 2, name: "Pizza", price: 8, image: "🍕" },
  { id: 3, name: "Pasta", price: 7, image: "🍝" },
];

function MenuItem({ item, addToCart }) {
  return (
    <div>
      <h3>{item.image} {item.name} - ${item.price}</h3>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
}

function RestaurantApp() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Simulate fetching from API
    setTimeout(() => setMenu(mockMenu), 500);
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Restaurant Menu</h2>
      {menu.map((item) => (
        <MenuItem key={item.id} item={item} addToCart={addToCart} />
      ))}

      <h2>Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : 
        cart.map((item, index) => (
          <p key={index}>
            {item.image} {item.name} - ${item.price} 
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </p>
        ))
      }
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
}

export default RestaurantApp;
