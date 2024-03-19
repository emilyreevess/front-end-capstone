import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ children, cards }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollTop);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Card container with scrollable content */}
        <div className="card-container" onScroll={handleScroll}>
          {cards.map((card, index) => (
            <div key={index} className="card">
              {card}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;