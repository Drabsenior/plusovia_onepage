import React from "react";
import "./Offer.css";
const Offer = () => {
  return (
    <div className="offercontainer">
      <div className="offeritemcontainer">
        <div className="offercountdown">
          <h2>20% off Ends in 2d 15h 15m 52s</h2>
        </div>
        <div className="offerpackage">
          <h2>Special Package</h2>
          <ul>
            <li>Website upto 5 pages</li>
            <li>Mobile Responsive</li>
            <li>Static Website with Fast and safe </li>
            <li>Free Host and Domain name incuded</li>
            <li>With Dashboard to how the website is doing </li>
            <li>Done with in a week</li>
          </ul>
          <hr />
          <span>15,000 birr</span>
          <button>Call us now</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
