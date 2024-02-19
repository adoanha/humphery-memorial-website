import React from "react";
import { Button } from "./Button.js";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our email listing so we can send out love for visiting Humphrey's
          memorial!
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              type="email"
              name="email"
              placeholder="Your email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/about">What this website is about</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/terms">Terms and Conditions</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact">Contact</Link>
            <Link to="/support">Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Media</h2>
            <Link to="/send-love">Submit Photos</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="https://www.facebook.com/nastasi.mignott" target="_blank">
              Facebook
            </Link>
            <Link to="https://www.instagram.com/nas.t.asi" target="_blank">
              Instagram
            </Link>
            <Link to="https://www.tiktok.com/@vodqua_aunt" target="_blank">
              TikTok
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo" to="/">
              Humphrey <i class="fa-solid fa-carrot"></i>
            </Link>
          </div>
          <small className="website-rights">Hump © 2024</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="https://www.facebook.com/nastasi.mignott"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="https://www.instagram.com/nas.t.asi"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              class="social-icon-link tiktok"
              to="https://www.tiktok.com/@vodqua_aunt"
              target="_blank"
              aria-label="TikTok"
            >
              <i class="fab fa-tiktok" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
