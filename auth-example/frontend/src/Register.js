import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { username, password });
      alert('Registration successful');
    } catch (error) {
			if (error.response.data.errorResponse.errmsg.includes('duplicate'))
				{
					alert('Username already used for registration');	
				}
			else {
				alert('Registration failed');
			};
  }};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
	   <p>Already Registered? <Link to="/login">Login Again</Link></p>
    </form>
  );
}

export default Register;
