import React, { useState } from 'react';
import './Modal.css';

function groupConsecutiveNumbers(numbers) {
  const groups = [];
  let currentGroup = [numbers[0]];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] === currentGroup[currentGroup.length - 1] + 1) {
      currentGroup.push(numbers[i]);
    } else {
      groups.push(currentGroup);
      currentGroup = [numbers[i]];
    }
  }
  groups.push(currentGroup);

  return groups;
}

const Modal = ({ children, apiResponse }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollTop);
  };

    // Group consecutive numbers in the API response
  const groupedNumbers = groupConsecutiveNumbers(apiResponse);

  // Generate cards content
  const cardsContent = groupedNumbers.map((group, index) => (
    <div key={index}>
      <h3>Bar {group.length === 1 ? group[0] : `${group[0]} - ${group[group.length - 1]}`}</h3>
      <p>{group.join(', ')}</p>
    </div>
  ));

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Card container with scrollable content */}
        <div className="card-container" onScroll={handleScroll}>
          {cardsContent.map((card, index) => (
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