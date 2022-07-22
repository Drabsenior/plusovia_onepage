import React from "react";
import "./Youtbe.css";
const Youtube = () => {
  return (
    <div className="youtubecontainer">
      <iframe
        src="https://www.youtube.com/embed/tiOFmHOjXH0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Youtube;
