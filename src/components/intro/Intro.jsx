import React from 'react';
import './intro.css';
import video1 from './Biagi-Main.mp4';
import video2 from './Biagi-WW.mp4';
import video3 from './Biagi-OF.mp4';

const Intro = () => {
  return (
    <div className="i-container">

        <div className="i-videobox">
          <video src={video1} autoPlay loop muted/>
          <div className="i-info">
            <span className="i-info-title">BÍ MORE</span>
            <button className="i-info-btn">
                Explore All Collections
            </button>
          </div>
        </div>
        
    </div>
  )
}

export default Intro;