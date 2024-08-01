import React from 'react';

const Advertisement = ({ title, description, contact, imageUrl }) => {
  return (
    <div style={styles.adContainer}>
      <div style={{ ...styles.imagePlaceholder, backgroundImage: `url(${imageUrl})` }}>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Contact: {contact}</p>
      <button style={styles.button}>Details</button>
    </div>
  );
};

const styles = {
  adContainer: {
    border: '1px solid #ddd',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    borderRadius: '8px',
    width: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '150px', // Bildens bredd
    height: '150px', // Bildens höjd
    backgroundColor: '#eee', // Bakgrundsfärg innan bild laddas
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    color: '#999',
    backgroundSize: 'cover', // Gör att bilden täcker hela platsen utan att förvrängas
    backgroundPosition: 'center', // Centrerar bilden
    backgroundRepeat: 'no-repeat', // Förhindrar att bilden upprepas
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};


export default Advertisement;
