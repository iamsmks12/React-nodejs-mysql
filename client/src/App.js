import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import SubmitPage from './SubmitPage';

function App() {
  return (
    <Router>
      <div>
	  <div class="visible">
		<h1>This is the Home Page of this React Applcation. Below are the available options -</h1>
        <nav>
          <ul>
		    <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
			<li>
              <Link to="/submit">Submit Name and Email</Link>
            </li>
          </ul>
        </nav>
		</div>
        <Routes>
			<Route exact path="/"/>
			<Route exact path="/about" element={<HomePage />} />
			<Route exact path="/submit" element={<SubmitPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
