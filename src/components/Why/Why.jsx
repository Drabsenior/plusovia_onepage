import React from "react";
import "./Why.css";
import Whyimage from "../../assets/image/project2.png";
const Why = () => {
  return (
    <div className="whypagecontainer">
      <div className="whyflexcontainer">
        <h2>Why Plusova?</h2>
        <img src={Whyimage} alt="" />
        <span>Why do you need a website in Ethiopia</span>
        <ul>
          <li>- Information (To give information to people )</li>
          <li> - Brand Quality (Make you business international)</li>
          <li>Sales closing (Help people to buy from you)</li>
          <p>
            Our website delivers all 3 needs plus its fast and mobile responsive
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Why;
