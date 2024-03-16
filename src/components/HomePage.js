
import React from 'react';
import { Link } from 'react-router-dom';

function Home({ setShowMainHeader }) {
  setShowMainHeader(true); // Set the main header to be shown on the home page
  return (
    <div>
      <header className="App-header">
      </header>
      <div className="content">
        {/* Add content for the home page */}
        <h2>Welcome to Workwanders</h2>
        <p>This is the homepage content.</p>
      </div>
    </div>
  );
}

export default Home;
