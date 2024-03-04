import React, { useState } from 'react';

const LoginScreen = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      if (username === 'user' && password === 'password') {
        onLogin();
      } else {
        alert('Invalid username or password');
      }
    };

    return (
      <div>
        <h2>Login Screen</h2>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };
  


export default LoginScreen