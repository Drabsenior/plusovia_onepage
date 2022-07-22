import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";
const Gallery = () => {
  const setting = {};
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        setting: {
          dots: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1150,
        setting: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1300,
        setting: {
          slidesToShow: 4,
        },
      },
    ],
  };
  return (
    <div className="gallerycontainer">
      <Slider {...settings} {...setting}>
        <div className="galleryimg">
          <img
            src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373__340.jpg"
            alt=""
          />
        </div>
        <div className="galleryimg">
          <img
            src="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VifGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="galleryimg">
          <img src="https://mobirise.com/assets52/images/poster.png" alt="" />
        </div>
        <div className="galleryimg">
          <img
            src="https://images04.nicepage.com/feature/511177/create-any-website-with-powerful-website-builder-website-builder.jpg"
            alt=""
          />
        </div>
        <div className="galleryimg">
          <img
            src="https://www.ed2go.com/common/images/1/17572/html-code-for-websites/jpg.jpg"
            alt=""
          />
        </div>
        <div className="galleryimg">
          <img
            src="https://constructionexec.com/assets/site_18/images/article/031618012000.jpg?width=1280"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Gallery;
