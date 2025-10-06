import React, { ReactNode, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode; // Correctly typing children as ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose} className="modal-close-button">
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>React Modal Example</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>This is a modal!</h2>
        <p>You can put any content you want here.</p>
      </Modal>
    </div>
  );
};

