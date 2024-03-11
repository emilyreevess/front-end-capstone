// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './components/LoginScreen.js'; // Import the LoginScreen component
import MainScreen from './components/MainScreen.js';
import './App.css';
import LocalImageViewer from './components/LocalImageViewer.js';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

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
          <Route path="/sheetmusic" element={<LocalImageViewer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
