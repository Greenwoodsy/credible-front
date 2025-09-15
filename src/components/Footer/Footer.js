// Footer.jsx
import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="simple-footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h3>Credible Investment Experts</h3>
          <p>
            Secure, transparent investment solutions designed to help you grow
            your financial future with confidence.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/our-story">Our Story</a>
            </li>
            <li>
              <a href="/investment-plans">Investment Plans</a>
            </li>
            <li>
              <a href="/how-it-works">How It Works</a>
            </li>
            <li>
              <a href="/support">Support</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/license">License</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>
            Email:{" "}
            <a href="mailto:invest@credibleinvestmentexperts.com">
              invest@credibleinvestmentexperts.com
            </a>
          </p>
          <p>
          Phone: <a href="tel:+17088869524">+1 (708) 886-9524</a>
          </p>
          <p>Address: Denver, CO, USA</p>

          <div className="footer-socials">
            <a
              href="https://wa.me/17088869524"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter />
            </a>
            <a
              href="https://www.facebook.com/share/19bT9TVfWS/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        &copy; 2001 Credible Investment Experts. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
