import React from "react";
import "./Footer.css";
import Logo from "../../assets/image/image 1.png";
const Footer = () => {
  return (
    <div className="footercontainer">
      <div className="footerlogo">
        <img src={Logo} alt="" />
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
