import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import Register from './Register';
import Dashboard from './Dashboard';

function Login({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
	  if (response.status >= 200 && response.status < 300) {
		  localStorage.setItem('token', response.data.token);
		  localStorage.setItem('myName', response.data.user.username);
		  // Cookies.set('token', response.data.token);
		  // Cookies.set('cUsername', response.data.user.username);
		  alert('Login successful', response.data.user.username);
		  handleLogin(response.data.user.username); // Pass username to parent component
		  console.log(response);
		  navigate('/dashboard'); // Redirect to dashboard upon successful login		  
	  }
	   else {
        console.error('Login failed');
		alert('Invalid username or password');
      }	  
    } catch (error) {
	  alert('Invalid username or password');
      console.error('Login error', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
	  <p>New user? <Link to="/register">Register here</Link></p>
    </form>
  );
}

export default Login;
