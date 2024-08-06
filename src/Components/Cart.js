import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={styles.cartContainer}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul style={styles.cartList}>
            {cartItems.map((item, index) => (
              <li key={index} style={styles.cartItem}>
                <img src={item.imageUrl} alt={item.title} style={styles.cartImage} />
                <div style={styles.itemDetails}>
                  <h4>{item.title}</h4>
                  <p>${item.price}</p>
                </div>
                <button 
                  style={styles.removeButton} 
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

const styles = {
  cartContainer: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: '20px auto',
    textAlign: 'center',
  },
  cartList: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '20px',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
  },
  itemDetails: {
    flex: 1,
    marginLeft: '10px',
  },
  cartImage: {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    marginRight: '10px',
  },
  removeButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Cart;
