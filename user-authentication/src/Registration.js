// Registration.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // for making HTTP requests

const Registration = () => {

const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    /* Create user object
    const newUser = {
      firstName,
      lastName,
      email,
      mobileNumber,
      username,
      password
    }; */

    try {
      // Send POST request to backend server
      const response = await axios.post('http://localhost:5000/register', formData);
      console.log(response.data); // Assuming backend sends back a success message
	  alert('Registration Successful');
	  setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        username: '',
        password: ''
      });
      // Optionally: Redirect to a success page or show a success message
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error (show error message, etc.)
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Mobile Number:
          <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default Registration;
