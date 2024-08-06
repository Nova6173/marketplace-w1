import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div style={modalStyles.modalBackdrop}>
      <div style={modalStyles.modalContent}>
        <button onClick={onClose} style={modalStyles.closeButton}>X</button>
        {children}
      </div>
    </div>
  );
};

const modalStyles = {
  modalBackdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    position: 'relative',
    width: '90%',
    maxWidth: '500px',
    maxHeight: '80%', // Justera höjden 
    overflowY: 'auto', // Gör att innehållet blir rullbart om det är för stort för modalen
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Modal;
