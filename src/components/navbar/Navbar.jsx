import React, { useState, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

    const [color, setColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY > 90) {
            setColor(true);
        } else {
            setColor(false)
        }
    }

    const location = useLocation();
    let home = false;

    if (location.pathname === "/")
    {
        home = true;
        window.addEventListener('scroll', changeColor);
    } else {
        home = false;
        window.removeEventListener('scroll', changeColor);
    }

    const navRef = useRef();

  return (
    <div ref={navRef} className={!home ? "n-container2" : color ? "n-container n-container-color n-container-height" : "n-container"}>
        <div className="n-wrapper">
            <div className="n-left">
                <Link to="" className={!home ? "n-logo n-logo-size2" : color ? "n-logo n-logo-size2" : "n-logo n-logo-size1"}>
                    <span>BÍAGI</span>
                </Link>
                <ul className="n-group">
                    <li>
                        <NavLink to="/women" className="navlink">WOMEN</NavLink>
                    </li>
                    <li>
                        <NavLink to="/men" className="navlink">MEN</NavLink>
                    </li>
                    <li>
                        <NavLink to="/handbags" className="navlink">HANDBAGS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/jewelry" className="navlink">JEWELRY</NavLink>
                    </li>
                    <li>
                        <NavLink to="/beauty" className="navlink">BEAUTY</NavLink>
                    </li>
                </ul>
            </div>

            

            <div className="n-right">
                <div className="n-cart">
                    <i class="uil uil-shopping-bag"></i>
                    <span className="n-cart-count">0</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;