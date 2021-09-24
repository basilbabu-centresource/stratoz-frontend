import React, { Component } from "react";
import styles from "./Slider.module.scss";
import ReactHtmlParser from 'react-html-parser';
import Image from "next/image";

const Slider: React.FC = ({slider}: any) => {
  //console.log(slider);
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
              <div className="carousel-indicators  d-none d-md-flex">
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
                
                  {slider.map((content: any, i: number) => (
                    i == 0 ? (
                      <div className="carousel-item active" key={i}>
                        <img
                          src={
                            content.image
                              ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${content?.image?.url}`
                              : "/about-bathroom.png"
                          }
                        />
                        {/* <Image
                          alt="about_image"
                          src={
                            content.image
                              ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${content?.image?.url}`
                              : "/about-bathroom.png"
                          }
                          layout="responsive"
                          height="50%"
                          width="100%"
                          objectFit="cover"
                        />  */}
                        <div className="carousel-caption">
                          <h1>{ ReactHtmlParser(content.title) }</h1>
                        </div>
                      </div>
                    ) : (
                      <div className="carousel-item " key={i}>
                        <img
                          src={
                            content.image
                              ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${content?.image?.url}`
                              : "/about-bathroom.png"
                          }
                        />
                        <div className="carousel-caption">
                          <h1>{ ReactHtmlParser(content.title) }</h1>
                        </div>
                      </div>
                    )
                  ))}
              </div>
            </div>
            
            <div className="scrollanim d-none d-md-flex">
              <span>.</span>
            </div>

          </section>
          </div>
        </div>
      </div>
      <div className="mobileSidebar">
        <>Stratoz Versatile Design</>
      </div>
    </div>

  );
};

export default Slider;
