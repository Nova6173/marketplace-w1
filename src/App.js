
import React, { useState } from 'react';
import Navbar from './Navbar';
import Marketplace from './Marketplace';
import Footer from './Footer';



function App() {
  const [view, setView] = useState('home')
  return (
    <div>
      <Navbar view={view} setView={setView} />
      
      {view === 'home' && <Marketplace />}
      {view === 'about' && <h2>About Us</h2>}
      {view === 'contact' && <h2>Contact Us</h2>}
      {view === 'login' && <h2>Login Page</h2>}
      {view === 'signup' && <h2>Sign Up Page</h2>}

      <Footer />

    </div>
  );
}

export default App;
