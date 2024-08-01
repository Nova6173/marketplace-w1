import React from 'react';
import Advertisement from '../Advertisement/Advertisement';




const Marketplace = () => {
  const ads = [
    { id: 1, title: 'Product 1', description: 'Description', contact: 'contact1@gmail.com', imageUrl: `${process.env.PUBLIC_URL}/images/AdvertisementImages/smart-watch-821559_1280.jpg` },  
    { id: 2, title: 'Product 2', description: 'Description', contact: 'contact2@gmail.com', imageUrl: `${process.env.PUBLIC_URL}/images/AdvertisementImages/earphones-5193970_1280.jpg`},
    { id: 3, title: 'Product 3', description: 'Description', contact: 'contact3@gmail.com', imageUrl: `${process.env.PUBLIC_URL}/images/AdvertisementImages/laptop-7263006_1280.png` },
    { id: 4, title: 'Product 4', description: 'Description', contact: 'contact4@gmail.com', imageUrl: `${process.env.PUBLIC_URL}/images/AdvertisementImages/mobile-157065_1280.png`  },
    { id: 5, title: 'Product 5', description: 'Description', contact: 'contact5@gmail.com', imageUrl: `${process.env.PUBLIC_URL}/images/AdvertisementImages/mountain-bike-2447170_1280.jpg` },
    { id: 6, title: 'Product 6', description: 'Description', contact: 'contact6@gmail.com', imageUrl: `${process.env.PUBLIC_URL}/images/AdvertisementImages/old-man-2815675_1280.png` },
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
            imageUrl={ad.imageUrl}
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