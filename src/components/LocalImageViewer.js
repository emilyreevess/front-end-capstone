// import React, { useEffect, useState } from 'react';
// import AudioRecorderComponent from './AudioRecorderComponent';
// import UploadFile from './UploadFile';

// const LocalImageViewer = () => {

//   const [scale, setScale] = useState(1);
//   const [isHovered, setIsHovered] = useState(null); // Use null to track which div is hovered

//   const updateScale = () => {
//     const originalWidth = 791; // Adjust as needed
//     const container = document.querySelector('.image-container');
//     if (container) {
//       const currentWidth = container.offsetWidth;
//       const newScale = currentWidth / originalWidth;
//       setScale(newScale);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('resize', updateScale);

//     return () => window.removeEventListener('resize', updateScale);
//   }, []);

//   const handleOverlayClick = (message) => {
//     alert(`Correct your notes for ${message}`);
//     // You can add more functionality here
//   };

//   const handleMouseEnter = (index) => {
//     setIsHovered(index);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(null);
//   };

//   const divs = [
//     {
//       top: 163,
//       left: 53,
//       width: 150,
//       height: 94,
//       message: 'Bar 1',
//     },
//     {
//       top: 163,
//       left: 311,
//       width: 106,
//       height: 95,
//       message: 'Bar 3',
//     },
//     // Add more div configurations as needed
//   ];

//   return (
//     <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <div className="image-container" style={{ position: 'relative', maxHeight: '100vh' }}>
//         <img
//           src='/GroundTruthTwinkleTwinkle.jpg'
//           alt="JPG Viewer"
//           style={{ width: 'auto', maxHeight: '100vh' }}
//           onLoad={updateScale} // Trigger scale update when image loads
//         />
//         {divs.map((div, index) => (
//           <div
//             key={index}
//             onClick={() => handleOverlayClick(div.message)}
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//             style={{
//               position: 'absolute',
//               top: div.top * scale + 'px',
//               left: div.left * scale + 'px',
//               width: div.width * scale + 'px',
//               height: div.height * scale + 'px',
//               backgroundColor: isHovered === index ? 'rgba(223, 189, 226, 0.7)' : 'rgba(233, 199, 236, 0.5)',
//               transition: 'background-color 0.3s ease',
//             }}
//           ></div>
//         ))}
//         <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
//           <AudioRecorderComponent scale={scale} />
//         </div>
//       </div>
//       <div style={{ position: 'absolute', bottom: '20px', left: '5%' }}>
//           <UploadFile scale={scale} />
//       </div>
//     </div>
//   );
// };

// export default LocalImageViewer;

import React, { useEffect, useState } from 'react';
import AudioRecorderComponent from './AudioRecorderComponent';
import UploadFile from './UploadFile';

const LocalImageViewer = ({ apiResponse, setApiResponse }) => {
  const [scale, setScale] = useState(1);
  const [isHovered, setIsHovered] = useState(null);
  const [visibleDivs, setVisibleDivs] = useState([]);

  useEffect(() => {
    // Directly set the visible divs based on the apiResponse array
    if (apiResponse && Array.isArray(apiResponse)) {
      setVisibleDivs(apiResponse);
    }
  }, [apiResponse]);

  const updateScale = () => {
    const originalWidth = 791; 
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
   // <MessageModal></MessageModal>
  };

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const divs = [
    //row 1
    {
      top: 163,
      left: 53,
      width: 150,
      height: 95,
      message: 'Bar 1',
    },
    {
      top: 163,
      left: 204,
      width: 106,
      height: 95,
      message: 'Bar 2',
    },
    {
      top: 163,
      left: 311,
      width: 106,
      height: 95,
      message: 'Bar 3',
    },
    {
      top: 163,
      left: 418,
      width: 106,
      height: 95,
      message: 'Bar 4',
    },
    {
      top: 163,
      left: 525,
      width: 106,
      height: 95,
      message: 'Bar 5',
    },
    {
      top: 163,
      left: 632,
      width: 106,
      height: 95,
      message: 'Bar 6',
    },
    //row 2
    {
      top: 356,
      left: 53,
      width: 156,
      height: 95,
      message: 'Bar 7',
    },
    {
      top: 356,
      left: 210,
      width: 85,
      height: 95,
      message: 'Bar 8',
    },
    {
      top: 356,
      left: 296,
      width: 110,
      height: 95,
      message: 'Bar 9',
    },
    {
      top: 356,
      left: 406,
      width: 110,
      height: 95,
      message: 'Bar 10',
    },
    {
      top: 356,
      left: 517,
      width: 110,
      height: 95,
      message: 'Bar 11',
    },
    {
      top: 356,
      left: 628,
      width: 110,
      height: 95,
      message: 'Bar 12',
    },
    //row 3
    {
      top: 548,
      left: 53,
      width: 136,
      height: 95,
      message: 'Bar 13',
    },
    {
      top: 548,
      left: 189,
      width: 106,
      height: 95,
      message: 'Bar 14',
    },
    {
      top: 548,
      left: 296,
      width: 122,
      height: 95,
      message: 'Bar 15',
    },
    {
      top: 548,
      left: 419,
      width: 106,
      height: 95,
      message: 'Bar 16',
    },
    {
      top: 548,
      left: 525,
      width: 106,
      height: 95,
      message: 'Bar 17',
    },
    {
      top: 548,
      left: 632,
      width: 106,
      height: 95,
      message: 'Bar 18',
    },
    //row 4
    {
      top: 740,
      left: 53,
      width: 139,
      height: 95,
      message: 'Bar 19',
    },
    {
      top: 740,
      left: 193,
      width: 109,
      height: 95,
      message: 'Bar 20',
    },
    {
      top: 740,
      left: 302,
      width: 109,
      height: 95,
      message: 'Bar 21',
    },
    {
      top: 740,
      left: 412,
      width: 109,
      height: 95,
      message: 'Bar 22',
    },
    {
      top: 740,
      left: 522,
      width: 125,
      height: 95,
      message: 'Bar 23',
    },
    {
      top: 740,
      left: 648,
      width: 88,
      height: 95,
      message: 'Bar 23',
    },
  ];

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="image-container" style={{ position: 'relative', maxHeight: '100vh' }}>
        <img
          src='/GroundTruthTwinkleTwinkle.jpg'
          alt="JPG Viewer"
          style={{ width: 'auto', maxHeight: '100vh' }}
          onLoad={updateScale}
        />
        {divs.map((div, index) => {
          // Adjust index by 1 for 1-based indexing to match API response
          if (visibleDivs.includes(index + 1)) {
            return (
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
            );
          }
          return null;
        })}
        <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
          <AudioRecorderComponent scale={scale} setApiResponse={setApiResponse}/>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '20px', left: '5%' }}>
          <UploadFile scale={scale} setApiResponse={setApiResponse}/>
      </div>
    </div>
  );
};

export default LocalImageViewer;