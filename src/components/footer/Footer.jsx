import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="f-wrapper">
        <div className="f-newsletter">
            <span className="f-n-title">ENTER THE WORLD OF BÍAGI</span>
            <span className="f-n-sub">Stay up to date on events, collections and exclusive news</span>
            <div className="f-n-email-group">
                <input type="text" required placeholder="Enter your email address" className="f-n-email"></input>
                <i class="uil uil-arrow-right"></i>
            </div>
        </div>
        <div className="f-container">
            <div className="f-lists">
                <div className="f-column">
                    <span className="f-heading">STORE LOCATOR</span>
                    <ul className="f-column-list">
                        <li className="f-list-item">Find A Boutique</li>
                        <li className="f-list-item">Book An Appointment</li>
                    </ul>
                </div>

                <div className="f-column">
                    <span className="f-heading">DO YOU NEED HELP?</span>
                    <ul className="f-column-list">
                        <li className="f-list-item">Contact Us</li>
                        <li className="f-list-item">FAQ</li>
                        <li className="f-list-item">Sitemap</li>
                    </ul>
                </div>

                <div className="f-column">
                    <span className="f-heading">EXCLUSIVE SERVICES</span>
                    <ul className="f-column-list">
                        <li className="f-list-item">Bíagi Services</li>
                        <li className="f-list-item">Track Your Order</li>
                        <li className="f-list-item">Returns</li>
                    </ul>
                </div>

                <div className="f-column">
                    <span className="f-heading">COMPANY</span>
                    <ul className="f-column-list">
                        <li className="f-list-item">Fondazione Bíagi</li>
                        <li className="f-list-item">Fashion Shows</li>
                        <li className="f-list-item">Sustainability</li>
                        <li className="f-list-item">Careers</li>
                    </ul>
                </div>

                <div className="f-column">
                    <span className="f-heading">LEGAL TERMS AND CONDITIONS</span>
                    <ul className="f-column-list">
                        <li className="f-list-item">Legal Notice</li>
                        <li className="f-list-item">Privacy Statement</li>
                        <li className="f-list-item">Cookie Policy</li>
                        <li className="f-list-item">Terms of Sale</li>
                    </ul>
                </div>
            </div>

            <div className="f-socials">
                <i class="uil uil-facebook-f"></i>
                <i class="uil uil-twitter"></i>
                <i class="uil uil-instagram"></i>
                <i class="uil uil-youtube"></i>
                <i class="bx bxl-tiktok"></i>
                <i class="bx bxl-pinterest"></i>
            </div>
        </div>
        <div className="f-copyright">
            <span>© 2023 Bíagi</span>
        </div>
    </div>
  )
}

export default Footer;