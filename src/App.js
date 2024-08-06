import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Marketplace from './Components/Marketplace';
import Footer from './Components/Footer';
import Cart from './Components/Cart';

function App() {
  const [view, setView] = useState('home');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const views = {
    home: <Marketplace addToCart={addToCart} />,
    about: <h2>About Us</h2>,
    contact: <h2>Contact Us</h2>,
    cart: <Cart cartItems={cartItems} removeFromCart={removeFromCart} />,
    login: <h2>Login Page</h2>,
    signup: <h2>Sign Up Page</h2>
  };

  return (
    <div>
      <Navbar view={view} setView={setView} />
      {views[view]}
      <Footer />
    </div>
  );
}

export default App;
