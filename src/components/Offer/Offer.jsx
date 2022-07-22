import React, { useEffect, useState } from "react";
import "./Offer.css";
const Offer = () => {
  const [des, setDay] = useState();
  const [hes, setHour] = useState();
  const [ses, setSecond] = useState();
  const [mes, setMinute] = useState();
  let interval;
  const startTimer = () => {
    const countDownDate = new Date("July 28 2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDay(days);
        setHour(hours);
        setSecond(seconds);
        setMinute(minutes);
        // console.log(des);
      }
    });
  };
  useEffect(() => {
    startTimer();
  });

  return (
    <div className="offercontainer">
      <div className="offeritemcontainer">
        <div className="offercountdown">
          <h2>{`20% off Ends in ${des}d ${hes}h ${mes}m ${ses}s`}</h2>
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
