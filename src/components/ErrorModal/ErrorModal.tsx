import React from 'react';
import './ErrorModal.css';

type ErrorModalProps = {
  isOpen: boolean;
  errorMessage: string;
  onClose: () => void;
};
export default function ErrorModal({isOpen, errorMessage, onClose}: ErrorModalProps) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content">
        <h1 className="modal-title">Oops!</h1>
        <p className="modal-message">{errorMessage}</p>
        <input type="submit" className="modal-close" onClick={onClose} value="Got it" />
      </div>
    </div>
  )
}

