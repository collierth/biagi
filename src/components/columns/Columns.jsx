import React from 'react';
import './columns.css';

const Columns = () => {
  return (
    <div className="c-outer">

    
    <div className="c-container">
        <div className="c-newsletter">
            <span className="c-heading">SUBSCRIBE TO OUR NEWSLETTER</span>
            <div className="c-field">
                <input type="text" id="email" placeholder="Insert your e-mail address"></input>
                <button type='submit'><i class="uil uil-arrow-right"></i></button>
            </div>
            <div className="c-terms">
                <input type="checkbox" id="check"></input>
                <label for="check">I have read and understood <b><u>Bíagi’s Privacy Policy</u></b> and I agree to receive the newsletter and other marketing communication.</label>
            </div>
            <div className="c-socials">
                <i class="uil uil-facebook-f"></i>
                <i class="uil uil-twitter"></i>
                <i class="uil uil-instagram"></i>
                <i class="uil uil-youtube"></i>
                <i class="bx bxl-spotify"></i>
                <i class="bx bxl-discord-alt"></i>
            </div>
        </div>

        <div className="c-lists">
            <div className="c-column">
                <span className="c-heading">DO YOU NEED HELP?</span>
                <ul className="c-column-list">
                    <li className="c-list-item">Contact Us</li>
                    <li className="c-list-item">FAQ</li>
                    <li className="c-list-item">Sitemap</li>
                </ul>
            </div>

            <div className="c-column">
                <span className="c-heading">EXCLUSIVE SERVICES</span>
                <ul className="c-column-list">
                    <li className="c-list-item">Bíagi Services</li>
                    <li className="c-list-item">Track Your Order</li>
                    <li className="c-list-item">Returns</li>
                </ul>
            </div>

            <div className="c-column">
                <span className="c-heading">COMPANY</span>
                <ul className="c-column-list">
                    <li className="c-list-item">Fondazione Bíagi</li>
                    <li className="c-list-item">Fashion Shows</li>
                    <li className="c-list-item">Sustainability</li>
                    <li className="c-list-item">Careers</li>
                </ul>
            </div>

            <div className="c-column">
                <span className="c-heading">LEGAL TERMS AND CONDITIONS</span>
                <ul className="c-column-list">
                    <li className="c-list-item">Legal Notice</li>
                    <li className="c-list-item">Privacy Statement</li>
                    <li className="c-list-item">Cookie Policy</li>
                    <li className="c-list-item">Terms of Sale</li>
                </ul>
            </div>
        </div>

    </div>
    <span className="footer__logo">BÍAGI</span>
    </div>
  )
}

export default Columns;