// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './components/LoginScreen.js'; // Import the LoginScreen component
import MainScreen from './components/MainScreen.js';
import './App.css';
import LocalImageViewer from './components/LocalImageViewer.js';
import { Link } from 'react-router-dom';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [apiResponse, setApiResponse] = useState([]);

  const handleApiResponse = (response) => {
    setApiResponse(response);
    console.log('API Response received in App:', response);
    // Perform additional actions with the response if needed
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/" element={isLoggedIn ? <MainScreen /> : <LoginScreen onLogin={handleLogin} />}
          />
          {/* <Route path="/" element={<MyComponent buttonText="Twinkle Twinkle Little Star" />} /> */}
          <Route path="/sheetmusic" element={<LocalImageViewer apiResponse={apiResponse} setApiResponse={handleApiResponse}/>} />
          <Route path="/MainScreen" element={<MainScreen/>} />
          <Route path="/MyProgress" element={<div style={{ position: 'relative' }}>
            <Link to='/Mainscreen' type="button" class="btn btn-light" style={{ position: 'absolute', marginLeft: '20px', marginTop: '20px', width: '100px' }}>Back</Link>
            <img src='/MyProgress.jpg'
              alt="JPG Viewer"
              style={{ width: '100%'}}
              ></img>
          </div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;