import React from 'react';
import logo from './Assets/litendrake.jpg';

const Navbar = ({ view, setView }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logoImage} />
        <span style={styles.logoText}>My Marketplace</span>
      </div>
      <ul style={styles.navLinks}>
        <li>
          <button
            style={{ ...styles.link, ...(view === 'home' ? styles.activeLink : {}) }}
            onClick={() => setView('home')}
          >
            Home
          </button>
        </li>
        <li>
          <button
            style={{ ...styles.link, ...(view === 'about' ? styles.activeLink : {}) }}
            onClick={() => setView('about')}
          >
            About
          </button>
        </li>
        <li>
          <button
            style={{ ...styles.link, ...(view === 'contact' ? styles.activeLink : {}) }}
            onClick={() => setView('contact')}
          >
            Contact
          </button>
        </li>
        <li>
          <button
            style={{ ...styles.link, ...(view === 'login' ? styles.activeLink : {}) }}
            onClick={() => setView('login')}
          >
            Login
          </button>
        </li>
        <li>
          <button
            style={{ ...styles.link, ...(view === 'signup' ? styles.activeLink : {}) }}
            onClick={() => setView('signup')}
          >
            Sign Up
          </button>
        </li>
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
