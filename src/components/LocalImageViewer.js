// import React from 'react';

// const LocalImageViewer = () => {
//   return (
//     <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <img src='/GroundTruthTwinkleTwinkle.jpg' alt="JPG Viewer" style={{maxHeight: '100vh', width: 'auto'}} />
//     </div>
//   );
// };

// export default LocalImageViewer;

import React from 'react';

const LocalImageViewer = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Container div for image and overlay */}
      <div style={{ position: 'relative', maxHeight: '100vh' }}>
        <img src='/GroundTruthTwinkleTwinkle.jpg' alt="JPG Viewer" style={{ width: 'auto', maxHeight: '100vh' }} />
        {/* Overlay div */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', // Adjust color and opacity as needed
          // Additional styles for the overlay can go here
        }}>
          {/* You can place overlay content here */}
        </div>
      </div>
    </div>
  );
};

export default LocalImageViewer;

