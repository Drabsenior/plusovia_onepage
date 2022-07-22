import React, { useState } from "react";
import Logo from "../../assets/image/image 1.png";
import "./Navbar.css";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <div className="navbarcontainer">
      {openNav && (
        <div className="mobilescreen" onClick={handleOpenNav}>
          <div className="navcloseicon" onClick={handleOpenNav}>
            <AiOutlineClose size={32} />
          </div>
          <div className="nalinks">
            <ul>
              <li>Home</li>
              <li>Our service</li>
              <li>About us</li>
              <li>Prices</li>
              <li>Contact us</li>
              <button>Order Now</button>
            </ul>
          </div>
        </div>
      )}

      <div className="logonav">
        <img src={Logo} alt="logo" />
      </div>
      <div className="linknav" onClick={handleOpenNav}>
        <BiMenu />
      </div>
      <div className="relnavlinks">
        <ul>
          <li>Home</li>
          <li>Our service</li>
          <li>About us</li>
          <li>Prices</li>
          <li>Contact us</li>
          <button>Order Now</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
