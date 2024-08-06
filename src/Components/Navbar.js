import React from 'react';
import logo from '../assets/litendrake.jpg';





const Navbar = ({ view, setView }) => {
  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' },
    { label: 'Login', value: 'login' },
    { label: 'Sign Up', value: 'signup' }
  ];

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logoImage} />
        <span style={styles.logoText}>My Marketplace</span>
      </div>
      <ul style={styles.navLinks}>
        {navItems.map(item => (
          <li key={item.value}>
            <button
              style={{ ...styles.link, ...(view === item.value ? styles.activeLink : {}) }}
              onClick={() => setView(item.value)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '10px 20px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    marginRight: '10px',
  },
  logoImage: {
    width: '30px',
    height: '30px',
    marginRight: '10px',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  link: {
    background: 'none',
    border: 'none',
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  activeLink: {
    textDecoration: 'underline',
  },
};

export default Navbar;
