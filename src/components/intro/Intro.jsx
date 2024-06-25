import React from 'react';
import './intro.css';
import Button from '../button/Button';
import video1 from './Biagi-Main.mp4';
import video2 from './Biagi-WW.mp4';
import video3 from './Biagi-OF.mp4';
import video4 from './ibrahim-bennett-(720p).mp4';

const Intro = () => {
  return (
    <div className="i-container">
        <div className="i-videobox">
            
          <div className="i-info-wrapper">
            <div className="i-info">
              <span className="i-info-title">WONDER AWAITS</span>
              <div className="i-btn-group">
                <Button>SHOP WOMEN'S</Button>
                <Button>SHOP MEN'S</Button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Intro;