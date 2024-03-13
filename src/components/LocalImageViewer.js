import React, { useEffect, useState } from 'react';
import AudioRecorderComponent from './AudioRecorderComponent';
import UploadFile from './UploadFile';

const LocalImageViewer = () => {

  const [scale, setScale] = useState(1);
  const [isHovered, setIsHovered] = useState(null); // Use null to track which div is hovered

  const updateScale = () => {
    const originalWidth = 791; // Adjust as needed
    const container = document.querySelector('.image-container');
    if (container) {
      const currentWidth = container.offsetWidth;
      const newScale = currentWidth / originalWidth;
      setScale(newScale);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateScale);

    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const handleOverlayClick = (message) => {
    alert(`Correct your notes for ${message}`);
    // You can add more functionality here
  };

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const divs = [
    {
      top: 163,
      left: 53,
      width: 150,
      height: 94,
      message: 'Bar 1',
    },
    {
      top: 163,
      left: 311,
      width: 106,
      height: 95,
      message: 'Bar 3',
    },
    // Add more div configurations as needed
  ];

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="image-container" style={{ position: 'relative', maxHeight: '100vh' }}>
        <img
          src='/GroundTruthTwinkleTwinkle.jpg'
          alt="JPG Viewer"
          style={{ width: 'auto', maxHeight: '100vh' }}
          onLoad={updateScale} // Trigger scale update when image loads
        />
        {divs.map((div, index) => (
          <div
            key={index}
            onClick={() => handleOverlayClick(div.message)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{
              position: 'absolute',
              top: div.top * scale + 'px',
              left: div.left * scale + 'px',
              width: div.width * scale + 'px',
              height: div.height * scale + 'px',
              backgroundColor: isHovered === index ? 'rgba(223, 189, 226, 0.7)' : 'rgba(233, 199, 236, 0.5)',
              transition: 'background-color 0.3s ease',
            }}
          ></div>
        ))}
        <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
          <AudioRecorderComponent scale={scale} />
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '20px', left: '5%' }}>
          <UploadFile scale={scale} />
      </div>
    </div>
  );
};

export default LocalImageViewer;


