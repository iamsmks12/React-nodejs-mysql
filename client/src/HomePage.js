import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h2>Hit Submit to Add Name and Email</h2>
      <Link to="/submit">Submit</Link>
    </div>
  );
}

export default HomePage;
