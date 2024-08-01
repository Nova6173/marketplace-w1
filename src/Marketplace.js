import React from 'react';
import Advertisement from './Advertisement';




const Marketplace = () => {
  const ads = [
    { id: 1, title: 'Ad 1', description: 'This is the first advertisement.', contact: 'contact1@gmail.com ' }, 
    { id: 2, title: 'Ad 2', description: 'This is the second advertisement.', contact: 'contact2@gmail.com ' },
    { id: 3, title: 'Ad 3', description: 'This is the third advertisement.', contact: 'contact3@gmail.com' },
    { id: 4, title: 'Ad 4', description: 'This is the fourth advertisement.', contact: 'contact4@gmail.com' },
    { id: 5, title: 'Ad 5', description: 'This is the fifth advertisement.', contact: 'contact5@gmail.com' },
    { id: 6, title: 'Ad 6', description: 'This is the sixth advertisement.', contact: 'contact6@gmail.com' },
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