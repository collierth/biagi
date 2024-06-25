import React from 'react';
import './gallery.css';
import Button from '../button/Button';

const Gallery = () => {
  return (
    <div className="g-container">
        <div className="g-cat g-img1">
            <div className="g-details">
                <Button>SHOP WOMEN'S</Button>
            </div>
        </div>
        <div className="g-cat g-img2">
            <div className="g-details">
                <Button>SHOP MEN'S</Button>
            </div>
        </div>
        <div className="g-cat g-img3">
            <div className="g-details">
                <Button>SHOP HANDBAGS</Button>
            </div>
        </div>
    </div>
  )
}

export default Gallery;