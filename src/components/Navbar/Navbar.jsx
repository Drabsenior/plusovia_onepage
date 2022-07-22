import React from "react";
import Logo from "../../assets/image/image 1.png";
import "./Navbar.css";
import { BiMenu } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="navbarcontainer">
      <div className="logonav">
        <img src={Logo} alt="logo" />
      </div>
      <div className="linknav">
        <BiMenu />
      </div>
    </div>
  );
};

export default Navbar;
