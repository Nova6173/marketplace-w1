import React, { useState } from 'react';
import Modal from './Modal';

const Advertisement = ({ title, description, imageUrl, fullDescription, contact, price, addToCart }) => {
  const [showModal, setShowModal] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleDetailsClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowContactForm(false);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent! Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`);
    setShowModal(false);
  };

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <div style={styles.adContainer}>
      <div style={{ ...styles.imagePlaceholder, backgroundImage: `url(${imageUrl})` }}>
      </div>
      <h3>{title}</h3>
      <p style={styles.price}>${price}</p>
      <p>{description}</p>
      <button style={styles.button} onClick={handleDetailsClick}>Details</button>
      <button style={styles.addToCartButton} onClick={addToCart}>Add to Cart</button>  {/* Add to Cart knapp */}
      
      {showModal && (
        <Modal show={showModal} onClose={handleCloseModal}>
          <h2>{title}</h2>
          <img src={imageUrl} alt={title} style={styles.modalImage} />
          <p style={styles.modalPrice}>${price}</p>
          <p>{fullDescription}</p>
          <button style={styles.contactButton} onClick={toggleContactForm}>Contact Me</button>
          {showContactForm && (
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label>Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  style={styles.textarea}
                />
              </div>
              <button type="submit" style={styles.submitButton}>Send Message</button>
            </form>
          )}
          <button onClick={handleCloseModal} style={styles.closeButton}>Close</button>
        </Modal>
      )}
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
    width: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '150px',
    height: '150px',
    backgroundColor: '#eee',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    color: '#999',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  price: {
    fontSize: '20px',
    color: '#28a745',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  modalPrice: {
    fontSize: '24px',
    color: '#28a745',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  addToCartButton: {
    backgroundColor: '#ffc107',
    color: 'black',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  modalImage: {
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
  },
  contactButton: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    resize: 'vertical',
    minHeight: '100px',
  },
  submitButton: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  closeButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default Advertisement;
