// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Dashboard from './Dashboard';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
    <Router>
      <div>
        <h1>User Authentication Demo</h1>
        <Routes>
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard username={loggedInUser} />} />
          <Route path="/" element={<Login handleLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
