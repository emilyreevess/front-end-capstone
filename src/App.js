// App.js
import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen.js'; // Import the LoginScreen component
import MainScreen from './components/MainScreen.js';
import './App.css';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <MainScreen />
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
