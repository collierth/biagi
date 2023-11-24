import React from 'react';
import './test.css';
import videoBg2 from './winter-eyes.mp4';

const Test = () => {
  return (
    <div className="t-container">
        <div className="t-videobox">
          <video src={videoBg2} autoPlay loop muted/>
          <div className="t-info">
            <span className="t-info-title">BÍ MORE</span>
            <button className="t-info-btn">
                Explore the Collection
            </button>
          </div>
        </div>
    </div>
  )
}

export default Test;