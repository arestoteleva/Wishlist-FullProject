import React, { useState } from 'react';
import './loginModal.css';

function LoginModal({ isOpen, onClose, onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(username, password);
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginModal;
