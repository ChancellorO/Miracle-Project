'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const MUIModal = ({ show, onClose, children }) => {
  return (
    <Modal
      open={show}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="w-50 h-auto bg-white justify-content align-items">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          Close
        </button>
        <div className="mt-4">{children}</div>
      </Box>
    </Modal>
  );
};

export default MUIModal;
