// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  /* 	const handleSubmit = (e) => {
    e.preventDefault();
    // Mock authentication (replace with actual API call)
    if (username === 'user' && password === 'password') {
      handleLogin(username); // Pass username to parent component
      navigate('/dashboard'); // Redirect to dashboard upon successful login
    } else {
      alert('Invalid username or password');
    }
  }; */

  const handleSubmit = async (e) => {
	  e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const user = await response.json();
        console.log('Login successful', user);
        // Redirect or show user data after successful login
		handleLogin(user); // Pass username to parent component
		navigate('/dashboard'); // Redirect to dashboard upon successful login
      } else {
        console.error('Login failed');
		alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
		<br />
        <button type="submit">Login</button>
      </form>
      <p>New user? <Link to="/register">Register here</Link></p>
    </div>
  );
};

export default Login;
