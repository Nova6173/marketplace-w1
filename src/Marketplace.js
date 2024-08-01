import React from 'react';
import Advertisement from './Advertisement';




const Marketplace = () => {
  const ads = [
    { id: 1, title: 'Product 1', description: 'Description', contact: 'contact1@gmail.com ' }, 
    { id: 2, title: 'Product 2', description: 'Description', contact: 'contact2@gmail.com ' },
    { id: 3, title: 'Product 3', description: 'Description', contact: 'contact3@gmail.com' },
    { id: 4, title: 'Product 4', description: 'Description', contact: 'contact4@gmail.com' },
    { id: 5, title: 'Product 5', description: 'Description', contact: 'contact5@gmail.com' },
    { id: 6, title: 'Product 6', description: 'Description', contact: 'contact6@gmail.com' },
  ];

  return (
    <div>
      <h1>Marketplace UI</h1>
      <div style={styles.adList}>
        {ads.map(ad => (
          <Advertisement
            key={ad.id}
            title={ad.title}
            description={ad.description}
            contact={ad.contact}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  adList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
};

export default Marketplace;