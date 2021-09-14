import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../layout/Default";
import styles from "../../../styles/About.module.scss";
import Hero from "../../components/About/Hero";

const About: NextPage = () => {
  return (
    <>
      <LayoutDefault>
        <Hero />
        <div className={styles.container}>
          <Head>
            <title>Stratos</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <div className={styles.title_desc}>
              <div className={"container " + styles.mb65}>
                <h2 className={styles.h2_title}>
                  <span>Our</span> Story
                </h2>
                <hr />
                <div className={styles.row}>
                  <div className={styles.col6}>
                    <p>
                      Since inception, we believe in creating state of the art
                      designs that compliment a wide range of decor and have
                      constantly strived to improve our product line with
                      efficient craftsmanship and intricate details that are
                      visually pleasing to the eyes, with zero compromise on
                      quality.
                    </p>
                    <p>
                      {" "}
                      Our extensive range of product categories even covers
                      other product families giving you a complete solution with
                      luxurious and sleek designs catering to all your ceramic
                      needs for your vision, ensuring quality and efficiency.{" "}
                    </p>
                    <p>Stratoz Ceramics, Redefining Luxury!</p>
                  </div>
                  <div className={styles.col5 + " " + styles.offset1}>
                    <img src="/about-bathroom.png" />
                  </div>
                </div>
              </div>
              <div className={"container "}>
                <div className={styles.row}>
                  <div className={styles.col6}>
                    <div className={styles.bgcol6}>
                      <h5>OUR MISSION</h5>
                      <p>
                        To be the choice for the Middle East, Africa and India
                        for supply of industrial products, bathroom fixtures,
                        and finishing products, through providing excellent
                        customer service and integrating with the project
                        management team to add value at every stage at every
                        stage.
                      </p>
                    </div>
                  </div>
                  <div className={styles.col6}>
                    <div className={styles.bgcol6}>
                      <h5>OUR TEAM</h5>
                      <p>
                        Our key asset is our people who have enabled us over the
                        last 23 years to deliver a solid track record of growth.
                        Driven with passion our team ensure everything from the
                        initial sales process through to the delivery and after
                        sales support is done to make buying from us as seamless
                        as possible.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.col12}>
                    <h5>SHOWROOMS</h5>
                    <p>
                      Our retail showrooms provides architects, designers,
                      contractors and clients a space of their own. For
                      industrial products, they get a chance to have an hands
                      own experience of the product Whereas for Ceramics, we
                      work with our clients to designs and to have a feel of
                      their dream space.
                    </p>
                  </div>
                  <div className={styles.col12}>
                    <h5>OUR PROJECTS</h5>
                    <p>
                      We work alongside our clients throughout the span of a
                      project with the extensive experience which we carry right
                      from procurement to supply of the right product matching
                      the specifications and timelines provided by the client.
                    </p>
                  </div>
                  <div className={styles.col12}>
                    <h5>OUR SUPPLY CHAIN</h5>
                    <p>
                      Our supply chain capabilities helps the customers which is
                      the backbone for trade and project. With the help of the
                      latest inventory management systems, we optimize and
                      monitor the stock levels
                    </p>
                  </div>
                  <div className={styles.col12 + " " + styles.mb35}>
                    <img src="/ourstory.png" />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.center + " " + styles.col12}>
                    <h2>
                      <span>
                        WHY STRATOS
                        <hr />
                      </span>
                    </h2>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.col6}>
                    <div className={styles.mb40 + " " + styles.iconBox}>
                      <div>
                        <img src="/icons/save-water.png" />
                      </div>
                      <div className={styles.textLeft}>
                        <h5>Water Saving</h5>
                        <p>
                          Water Saving Thanks to the system it is now possible
                          to save more than 30% of water compared to
                          conventional toilets.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.col6}>
                    <div className={styles.mb40 + " " + styles.iconBox}>
                      <div>
                        <img src="/icons/guarantee.png" />
                      </div>
                      <div className={styles.textLeft}>
                        <h5>Warranty</h5>
                        <p>
                          Stratoz Products enjoys different warrantee for
                          different products ranging from 2 years to 10 years{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.col6}>
                    <div className={styles.mb40 + " " + styles.iconBox}>
                      <div>
                        <img src="/icons/document.png" />
                      </div>
                      <div className={styles.textLeft}>
                        <h5>Certifications</h5>
                        <p>
                          All our products produced everyday are made to the
                          industrial standards{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.col6}>
                    <div className={styles.mb40 + " " + styles.iconBox}>
                      <div>
                        <img src="/icons/headset.png" />
                      </div>
                      <div className={styles.textLeft}>
                        <h5>Assistance</h5>
                        <p>
                          A technical department is always at the service of our
                          customers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </LayoutDefault>
    </>
  );
};

export default About;
