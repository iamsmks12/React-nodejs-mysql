// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
      <div>
        <h1>User Authentication Demo</h1>
        <Routes>
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/register" element={<Register/>} />
		  <Route path="/dashboard" element={<Dashboard username={loggedInUser} />} />
          <Route path="/" element={<Login handleLogin={handleLogin} />} />
        </Routes>
      </div>
  );
}

export default App;
