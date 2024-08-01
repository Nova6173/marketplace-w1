import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Marketplace from './Components/Marketplace/Marketplace';
import Footer from './Components/Footer/Footer';

function App() {
  const [view, setView] = useState('home');

  const views = {
    home: <Marketplace />,
    about: <h2>About Us</h2>,
    contact: <h2>Contact Us</h2>,
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
