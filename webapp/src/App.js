import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [orderStatus, setOrderStatus] = useState('');
  const [user, setUser] = useState({ email: '', password: '' });
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    if (user.email && user.password) {
      setLoggedIn(true);
    }
  };

  const placeOrder = () => {
    if (loggedIn) {
      setOrderStatus("Order placed successfully!");
    } else {
      setOrderStatus("Please log in first.");
    }
  };

  return (
    <div>
      <h1>E-Commerce Frontend</h1>

      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={e => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={e => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>

      {loggedIn && <p>Welcome, {user.email}</p>}

      <h2>Products</h2>
      <ul>
        {products.map(prod => (
          <li key={prod.id}>{prod.name}</li>
        ))}
      </ul>

      <button onClick={placeOrder}>Place Order</button>
      {orderStatus && <p>{orderStatus}</p>}
    </div>
  );
}

export default App;
