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
    width: '100%', // Behåll denna för att footern ska täcka hela sidans bredd
    marginTop: 'auto', // Detta gör att footern hamnar längst ned om det finns annat innehåll
  },
};

export default Footer;
