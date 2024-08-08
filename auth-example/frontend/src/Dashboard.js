// Dashboard.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';

const Dashboard = ({ username }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!username) {
	  localStorage.removeItem('token');
	  navigate('/login');
	}
	
	if (!token) {
      navigate('/login');
      return;
    }

    // Verify token validity (e.g., decode and check expiration)
    const payload = JSON.parse(atob(token.split('.')[1]));
	console.log('Payload - ', payload);
    const currentTime = Math.floor(Date.now() / 1000);
	console.log('Current Time - ', currentTime);

    if (payload.exp < currentTime) {
      localStorage.removeItem('token');
      navigate('/login');
      return;
    }
  }, [navigate]);
	
  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem('token');
    
    // Navigate to the login page
    navigate('/login');
  };
  
  return (
    <div>
	  <h1>User Dashboard</h1>
      <h2>Welcome, {username}!</h2>
	  <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
