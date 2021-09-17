import React, { Component } from "react";
import styles from "./Slider.module.scss";
import Slider from "react-slick";

const Hero: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className={"slidenavLine " + styles.slider}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          {/* <div
            id="carouselExampleDark"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/banner.png"
                />
              </div>
              <div className="carousel-item ">
                <img
                  src="/banner.png"
                />
              </div>
              <div className="carousel-item ">
                <img
                  src="/banner.png"
                />
              </div>
            </div>
          </div> */}
          <Slider {...settings}>
            <div>
              <img className="w-100" src="/banner.png"/>
            </div>
            <div>
              <img  className="w-100" src="/banner.png"/>
            </div>
            <div>
              <img  className="w-100" src="/banner.png"/>
            </div>
          </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
