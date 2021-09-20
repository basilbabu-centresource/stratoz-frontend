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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-0">
          <section>
            <div
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
                  <div className="carousel-caption">
                    <h1>Experience <br/><span>Design Perfection</span></h1>
                  </div>
                </div>
                <div className="carousel-item ">
                  <img
                    src="/banner.png"
                  />
                  <div className="carousel-caption">
                    <h1>Experience <br/><span>Design Perfection</span></h1>
                  </div>
                </div>
                <div className="carousel-item ">
                  <img
                    src="/banner.png"
                  />
                  <div className="carousel-caption">
                    <h1>Experience <br/><span>Design Perfection</span></h1>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="scrollanim">
              <span>.</span>
            </div>

          </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
