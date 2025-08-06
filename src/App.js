import React from 'react';
import './App.css';
import githubLogo from './logo.png'; // logo.png is already in your src folder

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={githubLogo} alt="GitHub Logo" className="logo" />
        <h1>Welcome to GitHub</h1>
      </div>
    </div>
  );
}

export default App;

