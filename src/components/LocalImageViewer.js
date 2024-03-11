import React, { useEffect, useState } from 'react';
import AudioRecorderComponent from './AudioRecorderComponent';

const LocalImageViewer = () => {
  const [scale, setScale] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

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

const handleOverlayClick = () => {
  alert('Overlay clicked!');
  // You can add more functionality here
};

const handleMouseEnter = () => {
  setIsHovered(true);
};

const handleMouseLeave = () => {
  setIsHovered(false);
};

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="image-container" style={{ position: 'relative', maxHeight: '100vh' }}>
        <img
          src='/GroundTruthTwinkleTwinkle.jpg'
          alt="JPG Viewer"
          style={{ width: 'auto', maxHeight: '100vh' }}
          onLoad={updateScale} // Trigger scale update when image loads
        />
        <div 
          onClick={handleOverlayClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
          position: 'absolute',
          top: 164 * scale + 'px',
          left: 54 * scale + 'px',
          width: 148 * scale + 'px',
          height: 92 * scale + 'px',
          backgroundColor: isHovered ? 'rgba(233, 199, 236, 0.7)' : 'rgba(233, 199, 236, 0.5)',
          transition: 'background-color 0.3s ease', // Add a smooth transition effect
        }}></div>
        <div 
          onClick={handleOverlayClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
          position: 'absolute',
          top: 164 * scale + 'px',
          left: 311 * scale + 'px',
          width: 109 * scale + 'px',
          height: 92 * scale + 'px',
          backgroundColor: isHovered ? 'rgba(233, 199, 236, 0.7)' : 'rgba(233, 199, 236, 0.5)',
          transition: 'background-color 0.3s ease', // Add a smooth transition effect
        }}></div>
      </div>
      <AudioRecorderComponent/>
    </div>
  );
};

export default LocalImageViewer;

// import React, { useEffect, useState } from 'react';

// const LocalImageViewer = () => {
//   const [scale, setScale] = useState(1);

//   useEffect(() => {
//     const updateScale = () => {
//       const originalWidth = 791; // Adjust as needed
//       const container = document.querySelector('.image-container');
//       if (container) {
//         const currentWidth = container.offsetWidth;
//         const newScale = currentWidth / originalWidth;
//         setScale(newScale);
//       }
//     };

//     window.addEventListener('resize', updateScale);

//     return () => window.removeEventListener('resize', updateScale);
//   }, []);

//   const handleOverlayClick = () => {
//     alert('Overlay clicked!');
//     // You can add more functionality here
//   };

//   return (
//     <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <div className="image-container" style={{ position: 'relative', maxHeight: '100vh' }}>
//         {/* First div */}
//         <div
//           onClick={handleOverlayClick}
//           style={{
//             position: 'absolute',
//             top: 164 * scale + 'px',
//             left: 54 * scale + 'px',
//             width: 148 * scale + 'px',
//             height: 92 * scale + 'px',
//             backgroundColor: 'rgba(233, 199, 236, 0.5)',
//           }}
//         ></div>

//         {/* Add more divs as needed, each with the onClick handler */}
//         <div
//           onClick={handleOverlayClick}
//           style={{
//             position: 'absolute',
//             top: 164 * scale + 'px',
//             left: 311 * scale + 'px',
//             width: 109 * scale + 'px',
//             height: 92 * scale + 'px',
//             backgroundColor: 'rgba(233, 199, 236, 0.5)',
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default LocalImageViewer;