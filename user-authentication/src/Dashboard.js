// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ username }) => {
  return (
    <div>
	  <h1>User Dashboard</h1>
      <h2>Welcome, {username.firstName}!</h2>
      <p>First Name: {username.firstName}</p>
      <p>Last Name: {username.lastName}</p>
      <p>Email: {username.email}</p>
      <p>Mobile Number: {username.mobileNumber}</p>
      <p>Username: {username.username}</p>
	  <p><Link to="/login">Logout</Link></p>
    </div>
  );
};

export default Dashboard;
