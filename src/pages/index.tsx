import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../layout/Default";
import styles from "../../styles/Home.module.scss";
import BannerSlider from "../components/Home/Slider";
import React, { Component } from "react";
import Slider from "react-slick";
import Link from "next/link";
import HtmlParser from "react-html-parser";

const Home: NextPage = ({ index, related }: any) => {
  //console.log(related, "relatedrelated");
  const slider = React.useRef<any>(null);
  const simDesignslider = React.useRef<any>(null);
  const excRangeslider = React.useRef<any>(null);
  const preSlider = React.useRef<any>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.09,
    slidesToScroll: 1,
    arrows: false,
      autoplay: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          rows: 1,
        }
      }
    ]
  };

  const simDesignsettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3.9,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
      autoplay: true,
  };

  const excRangesettings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 2.45,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
      autoplay: true,
  };

  const excRangesettings2 = {
    dots: false,
    slidesToShow: 1.9,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    centerMode: true,
    centerPadding: '60px',
      autoplay: true,
      autoplaySpeed: 2000
  };

  const preSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    arrows: false,
      autoplay: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          rows: 2,
        }
      }
    ]
  };
  
  const bgSlidesettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
      autoplay: true,
  };

  const sliderProps = { 
    slider: index.main_banner
  }

  return (
    <>
      <LayoutDefault>
        <BannerSlider {...(sliderProps as any)}/>
        <main className={styles.main}>
          <div className={"container " +styles.custContainer}>
            <Head>
              <title>Stratoz</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={"row " + styles.exProducts}>
              <div className={"col-md-12 " + styles.mb35}>
                <h3>
                  Explore <span>Products</span>
                </h3>

                <Slider ref={slider} {...settings}>
                  <div>
                    <div className={"row"}>

                      <div className={"col-md-6 " + styles.col6}>
                        <div className={styles.epImages +" "+ styles.homeImages}>
                          <img
                            src={
                              index.product_banner[0]?.banner
                                ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${index?.product_banner[0]?.banner?.url}`
                                : "/home/1.png"
                            }
                          />
                          <h3>
                            {HtmlParser(index.product_banner[0].title)}
                          </h3>
                        </div>
                      </div>
                      <div className={"col-md-5 " + styles.col5}>
                        <div className={"row h-100"}>
                          <div className={"col-md-12 " + styles.mb25}>
                            <div className={styles.epImages+" "+ styles.homeImages}>
                              <img
                                src={
                                  index.product_banner[1]?.banner
                                    ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${index?.product_banner[1]?.banner?.url}`
                                    : "/home/1.png"
                                }
                              />
                              <h3>
                                {HtmlParser(index.product_banner[1].title)}
                              </h3>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className={styles.epImages+" "+ styles.homeImages}>
                              <img
                                src={
                                  index.product_banner[2]?.banner
                                    ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${index?.product_banner[2]?.banner?.url}`
                                    : "/home/1.png"
                                }
                              />
                              <h3>
                                {HtmlParser(index.product_banner[2].title)}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={"row"}>
                      <div className={"col-md-6 " + styles.col6}>
                        <div className={styles.epImages+" "+ styles.homeImages}>
                          <img
                            src={
                              index.product_banner[3]?.banner
                                ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${index?.product_banner[3]?.banner?.url}`
                                : "/home/1.png"
                            }
                          />
                          <h3>
                            {HtmlParser(index.product_banner[3].title)}
                          </h3>
                        </div>
                      </div>
                      <div className={"col-md-5 " + styles.col5}>
                        <div className={"row h-100"}>
                          <div className={"col-md-12 " + styles.mb25}>
                            <div className={styles.epImages+" "+ styles.homeImages}>
                              <img
                                src={
                                  index.product_banner[4]?.banner
                                    ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${index?.product_banner[4]?.banner?.url}`
                                    : "/home/1.png"
                                }
                              />
                              <h3>
                                {HtmlParser(index?.product_banner[4]?.title)}
                              </h3>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className={styles.epImages+" "+ styles.homeImages}>
                              <img
                                src={
                                  index.product_banner[5]?.banner
                                    ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${index?.product_banner[5]?.banner?.url}`
                                    : "/home/1.png"
                                }
                              />
                              <h3>
                                {HtmlParser(index?.product_banner[5]?.title)}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="col-md-6 col-6">
                <button onClick={() => slider?.current?.slickPrev()}>
                  <img src="/icons/left.png" />
                </button>
                <button onClick={() => slider?.current?.slickNext()}>
                  <img src="/icons/right.png" />
                </button>
              </div>
              <div className="col-md-6 col-6 text-end">
                <Link href="/products">
                  <a>
                    <button>View all</button>
                  </a>
                </Link>
              </div>
            </div>
            
          </div>
        </main>

        <section className={styles.bgblack}>
          <div className={"container " +styles.custContainer}>
            <div className={"row " + styles.excRange}>
              <div className="col-md-6  d-md-none ">
                <div
                  className={"row justify-content-center align-items-center"}
                >
                  <div className={styles.width405}>
                    <div className={"row " + styles.mb35}>
                      <div className={"col-md-12 p-0 " +styles.p0}>
                        <h2 className={styles.mb35}>
                          { HtmlParser(index.exclusive_products.title) }
                        </h2>
                        <p>
                          { index.exclusive_products.description }
                        </p>
                      </div>
                    </div>
                    <div className="row ">
                      <div className={"col-md-6 col-6 p-0 "+styles.p0}>
                        <button
                          onClick={() => excRangeslider?.current?.slickPrev()}
                        >
                          <img src="/icons/left.png" />
                        </button>
                        <button
                          onClick={() => excRangeslider?.current?.slickNext()}
                        >
                          <img src="/icons/right.png" />
                        </button>
                      </div>
                      <div className={"col-md-6 col-6 p-0 text-end "+styles.p0}>
                        <Link href={ index.exclusive_products.link }>
                          <a>
                            <button>View all</button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-md-3 col-6 pt-4"}>
                <Slider ref={excRangeslider} {...excRangesettings1}>
                   {index.exclusive_products.image_1.map((content: any, i: number) =>(
                    <>
                      <div className={ styles.mx1rem +" "+ styles.homeImages } key={i}>
                        <img
                          src={
                            content
                              ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${content?.url}`
                              : "/about-bathroom.png"
                          }
                        />
                      </div>
                    </>
                  ))} 
                </Slider>
              </div>
              <div className={"col-md-3 col-6 "}>
                <Slider ref={excRangeslider} {...excRangesettings2}>
                  {index.exclusive_products.image_2.map((content: any, i: number) =>(
                    <>
                      <div className={ styles.mx2rem+" "+ styles.homeImages } key={i}>
                        <img
                          src={
                            content
                              ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${content?.url}`
                              : "/about-bathroom.png"
                          }
                        />
                      </div>
                    </>
                  ))}
                </Slider>
              </div>
              <div className="col-md-6  d-none d-md-flex justify-content-center">
                <div
                  className={"row justify-content-center align-items-center"}
                >
                  <div className={styles.width405}>
                    <div className={"row " + styles.mb35}>
                      <div className={"col-md-12 p-0 "+styles.p0}>
                        <h2 className={styles.mb35}>
                          { HtmlParser(index.exclusive_products.title) }
                        </h2>
                        <p>
                          { index.exclusive_products.description }
                        </p>
                      </div>
                    </div>
                    <div className="row ">
                      <div className={"col-md-6 col-6 p-0 "+styles.p0}>
                        <button
                          onClick={() => excRangeslider?.current?.slickPrev()}
                        >
                          <img src="/icons/left.png" />
                        </button>
                        <button
                          onClick={() => excRangeslider?.current?.slickNext()}
                        >
                          <img src="/icons/right.png" />
                        </button>
                      </div>
                      <div className={"col-md-6 col-6 p-0 text-end "+styles.p0}>
                        <Link href={ index.exclusive_products.link }>
                          <a>
                            <button>View all</button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.premium}>
          <div className={"container " +styles.custContainer}>
            <div className={"row " + styles.preTiles}>
              <h3>
                Touchless <span>Products</span>
              </h3>
              <div className={"col-md-9 col-sm-12 " + styles.mb30}>
                <div className={"row "}>
                  <div className="col-md-5">
                    <div className={ styles.homeImages}>
                      <img src="/home/tiles3.png" />
                    </div>
                  </div>
                  <div className="col-md-7 m-auto">
                    <h2 className={styles.mb35}>Hygienic Waves</h2>
                    <p>
                      STRATOZ Touchless is characterized by water control system that works without a visible sensor on the fitting. and can be used in combination with all STRATOZ series. The intuitive system offers ease of use and maximum design freedom The STRATOZ Touchless is ideal for guest bathrooms and use in semi - public areas.
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-md-12 " + styles.mb30}>
                <Slider ref={preSlider} {...preSettings}>
                  { related.map((data: any, index: number) => (
                    //console.log(data.title)
                    <>
                      <div>
                        <div className={styles.slideInd}>
                          <Image
                            alt="product_image"
                            src={
                              data.images
                                ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${data?.images[0]?.url}`
                                : "/home/p2.png"
                            }
                            layout="responsive"
                            height="100%"
                            width="100%"
                            objectFit="cover"
                          />
                          <p>
                            {data.title} <br />
                            <span>{data.code} - </span><span style={{ textTransform: "capitalize"}} >{data?.colour?.name}</span>
                          </p>
                        </div>
                      </div>
                    </>
                    
                  ))}
                  
                </Slider>
              </div>
              
              <div className="col-md-6 col-6">
                <button onClick={() => preSlider?.current?.slickPrev()}>
                  <img src="/icons/left.png" />
                </button>
                <button onClick={() => preSlider?.current?.slickNext()}>
                  <img src="/icons/right.png" />
                </button>
              </div>
              <div className="col-md-6 col-6 text-end">
                <Link href="/categories/touchless">
                  <a>
                    <button>View all</button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>


        <section className={styles.bgblack}>
          <div className={"container " +styles.custContainer}>
            <div className={"row align-items-center " + styles.simDesign}>
              <div className="col-md-6">
                <div
                  className={"row justify-content-center align-items-center"}
                >
                  <div className={styles.width365}>
                    <div className={"row " + styles.mb35}>
                      <div className={"col-md-12 p-0 "+ styles.p0}>
                        <h2 className={styles.mb35}>
                          { index.footer_top.title }
                        </h2>
                        <p>
                          { index.footer_top.description }
                        </p>
                      </div>
                    </div>
                    <div className="row ">
                      <div className={"col-md-6 col-6 p-0 "+ styles.p0}>
                        <button
                          onClick={() => simDesignslider?.current?.slickPrev()}
                        >
                          <img src="/icons/left.png" />
                        </button>
                        <button
                          onClick={() => simDesignslider?.current?.slickNext()}
                        >
                          <img src="/icons/right.png" />
                        </button>
                      </div>
                      <div className={"col-md-6 col-6 p-0 text-end "+ styles.p0}>
                        <Link href="/products">
                          <a>
                            <button>View all</button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-md-6 pt-4"}>
                <Slider ref={simDesignslider} {...simDesignsettings}>
                  
                  {index.footer_top.image.map((content: any, i: number) => (
                    <>
                      <div key={i} className={ "m-1 "+ styles.homeImages}>
                        <img 
                          src={
                            content
                              ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${content?.url}`
                              : "/home/sd1.png"
                          } />
                      </div>
                    </>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>

        <section className={"d-none d-md-flex " +styles.flipSect}>
          <div className={"container " +styles.custContainer}>
            <div className="row">
              <div className="col-md-3 ">
                <div className={styles.flipMain}>
                  <img 
                    src={
                      index.collections[0]
                        ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${index.collections[0]?.image?.url}`
                        : "/home/f1.png"
                    } />
                  <h2>{HtmlParser(index.collections[0].title)}<br/>
                  <Link href="/blog">View all</Link></h2>
                </div>
              </div>
              <div className={"col-md-9 p-0 " +styles.p0}>
                <div className={"row " + styles.row1}>
                  <div className={"col-md-4 p-0 "+styles.p0} style={{ background : index.collections[1].bg_colour}}>
                    <div className={styles.flipImg +" "+ styles.homeImages}>
                      <img 
                      src={
                        index.collections[1]
                          ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${index.collections[1]?.image?.url}`
                          : "/home/f2.png"
                      } />
                    </div>
                  </div>
                  <div className={"col-md-4 p-0 " +styles.p0} style={{ background : index.collections[2].bg_colour}}>
                    <div className={styles.flipImg+" "+ styles.homeImages}>
                      <img 
                      src={
                        index.collections[2]
                          ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${index.collections[2]?.image?.url}`
                          : "/home/f3.png"
                      } />
                    </div>
                  </div>
                  <div className={"col-md-4 p-0 " + styles.bgTitle1 + " "+styles.p0} style={{ background : index.collections[3].bg_colour}}>
                    <div className={styles.flipTitle}>
                      <h6>
                        {HtmlParser(index.collections[3].title)}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className={"row " + styles.row2}>
                  <div className={"col-md-4 p-0 " + styles.bgTitle2+ " "+styles.p0} style={{ background : index.collections[4].bg_colour}}>
                    <div className={styles.flipcontent}>
                      <p>{index.collections[4].description}</p>
                      <a>
                        <button>View all</button>
                      </a>
                    </div>
                  </div>
                  <div className={"col-md-4 p-0 " + styles.bgTitle3+ " "+styles.p0} style={{ background : index.collections[5].bg_colour}}>
                    <div className={styles.flipcontent}>
                      <p>
                        {index.collections[5].description}
                      </p>
                    </div>
                  </div>
                  <div className={"col-md-4 p-0 "+styles.p0} style={{ background : index.collections[6].bg_colour}}>
                    <div className={" flipImg h-100 "+ styles.homeImages}>
                      <img 
                      src={
                        index.collections[6]
                          ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${index.collections[6]?.image?.url}`
                          : "/home/f4.png"
                      } />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"d-md-none " +styles.flipSect}>
          <div className={"container " +styles.custContainer}>
            <div className="row">
              <div className="col-8  p-0">
                <div className={styles.flipMain}>
                  <img src="/home/f1.png" />
                  <h2>Timeless Designs</h2>
                </div>
              </div>
              <div className="col-4">
                <div className={"row h-100"}>
                  <div className={"col-12 p-0 "}>
                    <div className={styles.flipImg}>
                      <img src="/home/f2.png" />
                    </div>
                  </div>
                  <div className={"col-12 p-0 " + styles.bgTitle2 }>
                    <div className={styles.flipcontent}>
                      <p>Envision the future of bathware</p>
                      <a>
                        <button>View all</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className={"col-6 p-0 "}>
                <div className={styles.flipImg}>
                  <img src="/home/f3.png" />
                </div>
              </div>
              <div className={"col-6 p-0 " + styles.bgTitle1 }>
                <div className={styles.flipTitle}>
                  <h6>
                    Classic Black <br />
                    Interior
                  </h6>
                </div>
              </div>
            </div>
            <div className="row">
              <div className={"col-6 p-0 " + styles.bgTitle3}>
                <div className={styles.flipcontent}>
                  <p>
                    Designed and tuned with Stratoz concepts, Designing with
                    humble shades of black and white is as exciting as it
                    would be challenging.
                  </p>
                </div>
              </div>
              <div className={"col-6 p-0"}>
                <div className="flipImg h-100">
                  <img src="/home/f4.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={"slidenavLine " + styles.bgImg}>
          <div className={"container " +styles.custContainer}>
            <div className={"row " + styles.bgSlide}>
              <div className={"col-md-12 "}>
                <Slider {...bgSlidesettings}>
                  {index.banner_2.map((content: any, i: number) => (
                    <>
                      <div key={i}>
                        <div className={styles.carouselItem}>
                          
                          <img src={
                            content.image
                              ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${content?.image?.url}`
                              : "/home/g1.png"
                            } />
                          <div className={styles.carouselCaption}>
                            <h2>
                              {HtmlParser(content.title)}
                            </h2>
                            <p>
                              {content.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>

        
      </LayoutDefault>
    </>
  );
};


export async function getServerSideProps() {
  
  // Fetch all categories form API
  const home = await fetch(`${process.env.API_BASE_URL}/home`);
  const index = await home.json();

  const products = await fetch(`${process.env.API_BASE_URL}/products?category.slug=`+"touchless");
  const related =  await products.json();

  return {
    props: { index, related }
  };
}
export default Home;
