// // App.js

// import React, { useState } from 'react';

// const AudioRecorderComponent = () => {
//   const [isRecording, setIsRecording] = useState(false);

//   const startRecording = () => {
//     // Add logic for starting recording
//     setIsRecording(true);
//   };

//   const stopRecording = () => {
//     // Add logic for stopping recording
//     setIsRecording(false);
//   };

//   return (
//     <div>
//       <button onClick={startRecording} disabled={isRecording}>
//         Start Recording
//       </button>
//       <button onClick={stopRecording} disabled={!isRecording}>
//         Stop Recording
//       </button>
//     </div>
//   );
// };

// export default AudioRecorderComponent;

import React, { useState } from 'react';

const AudioRecorderComponent = ({scale}) => {
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    // You can add your logic to start recording here
    setIsRecording(true);
  };

  const stopRecording = () => {
    // You can add your logic to stop recording here
    setIsRecording(false);
  };

  const circleStyle = {
    width: `${70 * scale}px`,
    height: `${70 * scale}px`,
    borderRadius: '50%',
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <div style={{ position: 'relative' }}>
      {isRecording ? (
        <div style={circleStyle} onClick={stopRecording}>
          STOP
        </div>
      ) : (
        <div style={circleStyle} onClick={startRecording}>
          REC
        </div>
      )}
    </div>
  );
};

export default AudioRecorderComponent;

