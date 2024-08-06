import React, { useState } from 'react';
import Modal from './Modal';

const Advertisement = ({ title, description, contact, imageUrl }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const toggleDetails = () => {
    setShowDetails(prevState => !prevState);
    openNewWindow();
  };

  const openNewWindow = () => {
    const newWindow = window.open("", "_blank", "width=600,height=400");
    newWindow.document.write(`
      <html>
        <head>
          <title>${title}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
              line-height: 1.6;
            }
            h1 {
              font-size: 24px;
            }
            p {
              font-size: 16px;
              margin-bottom: 20px;
            }
            button {
              background-color: #007bff;
              color: white;
              border: none;
              padding: 8px 12px;
              border-radius: 4px;
              cursor: pointer;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <h1>${title}</h1>
          <p>${description}</p>
          <p>Contact: ${contact}</p>
          <button onclick="window.close()">Close</button>
        </body>
      </html>
    `);
    newWindow.document.close();
  };

  // Hämta första meningen av beskrivningen
  const firstSentence = description.split('. ')[0] + '.';

  const handleContactClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent! Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`);
    setShowModal(false); // Stäng modalen efter inskickad form
  };

  return (
    <div style={styles.adContainer}>
      <div style={{ ...styles.imagePlaceholder, backgroundImage: `url(${imageUrl})` }}>
      </div>
      <h3>{title}</h3>
      <p>{firstSentence}</p>
      <button style={styles.button} onClick={toggleDetails}>Details</button>
      <button style={styles.contactButton} onClick={handleContactClick}>Contact Me</button>
      
      <Modal show={showModal} onClose={handleModalClose}>
        <h2>Contact Seller</h2>
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
          <button type="submit" style={styles.submitButton}>Send</button>
        </form>
      </Modal>
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
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  contactButton: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
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
  }
};

export default Advertisement;
