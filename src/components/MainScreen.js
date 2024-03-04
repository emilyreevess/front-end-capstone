import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AudioRecorderComponent from './AudioRecorderComponent';
// import 'my-app/src/App.css';

const MainScreen = () => {
  // State to control the visibility of the NewScreen component and the button itself

  return (
    <div>
      <h2>Octave</h2>
      <AudioRecorderComponent/>
    </div>
  );
};

export default MainScreen;
