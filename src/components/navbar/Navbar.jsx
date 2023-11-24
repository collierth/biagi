import React, { useState, useRef } from 'react';
import Headroom from 'react-headroom';
import './navbar.css';

const Navbar = () => {

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY > 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor);
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

  return (
    <div ref={navRef} className={color ? 'n-container n-container-color' : 'n-container'}>
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-group">
                    <i class="uil uil-bars"></i>
                    <span className="navlink">Menu</span>
                </div>
            </div>

            <div className="n-mid">
                <span>BÍAGI</span>
            </div>

            <div className="n-right">
                <i class="uil uil-shopping-bag"></i>
            </div>
        </div>
    </div>
  )
}

export default Navbar;