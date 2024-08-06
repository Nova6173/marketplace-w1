import React from 'react';
import Advertisement from './Advertisement';



const Marketplace = () => {
  const ads = [
    { 
      id: 1, 
      title: 'Smart Watch', 
      description: `
        Selling a smartwatch in excellent condition. Features a sleek design, vibrant display, 
        and a variety of health and fitness tracking options, including heart rate monitoring and GPS. 
        Comes with the original charging cable and band. Lightly used with no visible wear or scratches. 
        Compatible with both iOS and Android. Perfect for staying connected and tracking your activities on the go. 
        Available for pickup or shipping at buyer's cost. A great opportunity to own a stylish and functional smartwatch!
      `, 
      contact: 'contact1@gmail.com', 
      imageUrl: `${process.env.PUBLIC_URL}/images/AdvertisementImages/smart-watch-821559_1280.jpg`
    },
    { 
      id: 2, 
      title: 'Air Pods', 
      description: `
        Selling a pair of Apple AirPods (2nd generation) in excellent condition. Perfect for wireless listening 
        with great sound quality and quick Bluetooth connection. Includes the original charging case, 
        and everything works perfectly. Charges easily with a Lightning cable. Lightly used and well cared for, 
        with no scratches or damage. Available for pickup or can be shipped at buyer’s expense. Don’t miss the chance 
        to upgrade your audio experience!
      `, 
      contact: 'contact2@gmail.com', 
      imageUrl: `${process.env.PUBLIC_URL}/images/AdvertisementImages/earphones-5193970_1280.jpg`
    },
    { 
      id: 3, 
      title: 'Laptop', 
      description: `
        Selling a laptop with 12GB RAM, 2.60 GHz processor, and 1000GB (1TB) hard drive. Perfect for multitasking, 
        gaming, or heavy workloads. The laptop is in great condition with no significant wear, and everything 
        functions smoothly. It’s fast, reliable, and ready for use, whether for work, study, or entertainment. 
        Comes with the original charger. Available for pickup or can be shipped at the buyer’s expense. Don’t miss 
        out on a powerful machine at a great price.
      `, 
      contact: 'contact3@gmail.com', 
      imageUrl: `${process.env.PUBLIC_URL}/images/AdvertisementImages/laptop-computer.jpg`
    },
    { 
      id: 4, 
      title: 'Rugged Smart Phone', 
      description: `
        Selling a Doogee V30T Android smartphone in stunning Rose Gold color. This rugged phone is in excellent condition 
        and offers powerful performance with its robust features. It’s designed to withstand tough conditions while still 
        looking stylish. The phone is fully functional, with a vibrant display, strong battery life, and plenty of storage space. 
        Perfect for anyone who needs a durable yet elegant device. Available for pickup or can be shipped at the buyer’s expense. 
        A fantastic deal for a reliable and stylish smartphone!
      `, 
      contact: 'contact4@gmail.com', 
      imageUrl: `${process.env.PUBLIC_URL}/images/AdvertisementImages/doogee-v30t-1.jpg`
    },
    { 
      id: 5, 
      title: 'MountainBike', 
      description: `
        Selling a high-quality mountain bike in excellent condition. Perfect for both beginners and experienced riders, 
        this bike offers a smooth ride with reliable gears, sturdy tires, and responsive brakes. Ideal for tackling trails 
        or casual rides around town. The frame is lightweight yet durable, showing minimal signs of use. Ready to hit the 
        trails right away! Available for pickup or can be delivered locally. Don't miss out on this great deal for an 
        adventure-ready mountain bike!
      `, 
      contact: 'contact5@gmail.com', 
      imageUrl: `${process.env.PUBLIC_URL}/images/AdvertisementImages/mountain-bike-2447170_1280.jpg`
    },
    { 
      id: 6, 
      title: 'Electric Scooter', 
      description: `
        Selling an electric scooter in excellent condition. Perfect for commuting or leisurely rides, this scooter offers 
        a smooth and quiet ride with impressive battery life and quick charging. It features a sturdy frame, responsive brakes, 
        and a bright LED display for speed and battery level. Lightweight and foldable for easy storage and transport. 
        Minimal signs of use and fully functional. Available for pickup or can be delivered locally. A great opportunity 
        to own a reliable and eco-friendly mode of transportation!
      `, 
      contact: 'contact6@gmail.com', 
      imageUrl: `${process.env.PUBLIC_URL}/images/AdvertisementImages/scooter.jpg`
    },
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
  }
};

export default Marketplace;
