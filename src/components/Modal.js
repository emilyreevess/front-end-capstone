import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ children, cards }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Check if cards array exists and has length greater than 0
  if (!cards || cards.length === 0) {
    return null; // Return null if cards array is undefined or empty
  }

  const handleNextCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Button to navigate to the previous card */}
        <button onClick={handlePrevCard}>Previous</button>

        {/* Card container with scrollable content */}
        <div className="card-container">
          {cards.map((card, index) => (
            <div key={index} className={index === activeCardIndex ? 'card active' : 'card'}>
              {card}
            </div>
          ))}
        </div>

        {/* Button to navigate to the next card */}
        <button onClick={handleNextCard}>Next</button>
      </div>
    </div>
  );
};

export default Modal;