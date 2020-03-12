import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://cdn.iconscout.com/icon/free/png-256/opacity-1781473-1513793.png" />
      </header>
      <nav className="nav">
        <div>
          Profile
        </div>
        <div>
          Messages
        </div>
      </nav>
      <div className="app-wrapper-content">
        Main content
      </div>
    </div>
  );
}

export default App;
