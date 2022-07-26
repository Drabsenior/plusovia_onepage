import React, { useEffect, useState } from "react";
import "./Landing.css";
import Shape from "../../assets/image/Ellipse 1.png";
import { AiOutlineClose } from "react-icons/ai";
const Landing = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handlemodal = () => {
    setModalOpen(!modalOpen);
    console.log(modalOpen);
  };

  return (
    <div className="wholecontain">
      {modalOpen && (
        <div className="modalvideocontainer">
          <div className="modalbackground" onClick={handlemodal}>
            <div className="closeicon" onClick={handlemodal}>
              <AiOutlineClose size={32} color="white" />
            </div>
            <iframe
              src="https://www.youtube.com/embed/5oN0U3Gz5TE"
              title="ይህ ኩባንያ ንግድዎን የሚቀይረው በዚህ መንገድ ነው።What do we do Plusova  #Ethiopian #Business #Plusova"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
      <div className="landingcontainer">
        <div className="landingcontent">
          <h2>Amazing website for your</h2>
          <p>
            We develop Fast and Optmize website for yourself or Bussiness Our
            process is simple and with big discount.
          </p>
          <div className="btncontain">
            <button className="watchbtn" onClick={handlemodal}>
              Watch Video
            </button>
            <a target="" href="https://plusova.com/Order.html">
              <button className="contactbtn">Contact us</button>
            </a>
          </div>
        </div>
        <img
          src="https://plusova.com/image/home-bg.png"
          alt=""
          className="fullimage"
        />
        <div className="shapeicon">
          <img src={Shape} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
