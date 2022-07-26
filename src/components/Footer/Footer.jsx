import React from "react";
import "./Footer.css";
import Logo from "../../assets/image/image 1.png";
const Footer = () => {
  return (
    <div className="footercontainer">
      <div className="footerlogo">
        <img src="https://plusova.com/image/Plusova Ethiopia-logo.png" alt="" />
      </div>
      <div className="flexdesktopfooter">
        <div className="fl1">
          <ul>
            <span>Company</span>
            <li>Home</li>
            <li>Service</li>
            <li>About us</li>
            <li>Price</li>
          </ul>
        </div>
        <div className="fl2">
          <ul>
            <span>Platform</span>
            <li>Community</li>
            <li>Our work</li>
            <li>Videos</li>
          </ul>
        </div>
      </div>
      <div className="footerdetail">
        <h2>Contact us</h2>
        <p>info@plusova.com</p>
        <p>094571234567</p>
        <p>Instagram</p>
        <p>Telegram</p>
        <p>Youtube</p>
      </div>
    </div>
  );
};

export default Footer;
