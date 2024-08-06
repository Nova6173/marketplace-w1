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
    height: '30px', // Ställ in en specifik höjd för footern
    lineHeight: '30px', // Vertikal centrering av texten
    width: '100%',
  },
};

export default Footer;
