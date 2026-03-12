import React from 'react';
import './header-component.css';
// import con2 from '../assets/con2.png';

const HeaderComponent = () => {
  return (
    <div className="header-component">
      <div className="hero-container">
        {/* Left: Image */}
        <div className="hero-image">
          {/* <img src={con2} alt="Hero" /> */}
        </div>

        {/* Right: Text + Card + Button */}
        <div className="hero-content">
          <div className="card">
            <h1 className="top-1">Hi, Welcome Here</h1>
            <h3>I am a Fullstack Developer</h3>
          </div>
          <button>EMPLOY ME</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;