import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 Nova. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    position: 'fixed', // Gör footern "sticky" längst ner på sidan
    left: 0,
    bottom: 0,
    width: '100%',
  },
};

export default Footer;
