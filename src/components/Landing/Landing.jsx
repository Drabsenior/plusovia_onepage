import React from "react";
import "./Landing.css";
import Shape from "../../assets/image/Ellipse 1.png";
const Landing = () => {
  return (
    <div className="landingcontainer">
      <div className="landingcontent">
        <h2>Amazing website for your</h2>
        <p>
          We develop Fast and Optmize website for yourself or Bussiness Our
          process is simple and with big discount.
        </p>
        <div className="btncontain">
          <button className="watchbtn">Watch Video</button>
          <button className="contactbtn">Contact us</button>
        </div>
      </div>
      <div className="shapeicon">
        <img src={Shape} alt="" />
      </div>
    </div>
  );
};

export default Landing;
