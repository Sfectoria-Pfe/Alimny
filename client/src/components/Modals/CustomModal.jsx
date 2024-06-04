import React from 'react';
import './CustomModal.css'; // Importez ce fichier CSS pour styliser le modal

const CustomModal = ({ open, setOpen, children }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button text-dark" onClick={() => setOpen(false)}>X</button>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
