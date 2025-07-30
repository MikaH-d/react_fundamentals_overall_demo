import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-content">
        <h1> Demos </h1>
      {/* <div className="welcome-card">
        <h2 className="welcome-title">Welcome to React Demos</h2>
        <p className="welcome-description">
          Choose a demo from the navigation above to get started exploring React concepts.
        </p>
        <div className="demo-cards">
          <Link to="/events-demo" className="demo-card">
            <span className="demo-card-icon">⚡</span>
            <h3>Events Demo</h3>
            <p>Learn about event handling in React</p>
          </Link>
          <Link to="/states-demo" className="demo-card">
            <span className="demo-card-icon">🔄</span>
            <h3>States Demo</h3>
            <p>Explore state management patterns</p>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Welcome;