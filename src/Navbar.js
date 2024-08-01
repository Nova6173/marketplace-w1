import React from 'react';
import logo from './Assets/litendrake.jpg';


    const Navbar = () => {
        return (
          <nav style={styles.navbar}>
            <div style={styles.logoContainer}>
            <img src={logo} alt="Logo" style={styles.logoImage} />
              <span style={styles.logoText}>My Marketplace</span>
              
            </div>
            <ul style={styles.navLinks}>
              <li><a href="#home" style={styles.link}>Home</a></li>
              <li><a href="#about" style={styles.link}>About</a></li>
              <li><a href="#contact" style={styles.link}>Contact</a></li>
              <li><a href="#login" style={styles.link}>Login</a></li>
              <li><a href="#signup" style={styles.link}>Sign Up</a></li>
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
          width: '30px', // Anpassa storleken på loggan
          height: '30px',
          marginRight: '10px', // Skapar ett mellanrum mellan loggan och texten
        },
        navLinks: {
          listStyle: 'none',
          display: 'flex',
          margin: 0,
          padding: 0,
        },
        link: {
          color: 'white',
          textDecoration: 'none',
          margin: '0 15px',
        },
      };
      
      export default Navbar;
