import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../layout/Default";
import styles from "../../../styles/About.module.scss";
import Hero from "../../components/About/Hero";
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
 

const About: NextPage = ({ about }: any) => {
  //console.log(about);
  return (
    <>
      <LayoutDefault>
        <Hero />
        <div className="container">
          <Head>
            <title>{about?.seo?.meta_title }</title>
            <meta name="description" content={about?.seo?.meta_description } />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <div className={styles.title_desc}>
              <div className={"container " + styles.mb65}>
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <h2 className={styles.h2_title}>
                      { ReactHtmlParser(about.our_story.title) }
                    </h2>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-6 pt-3">
                    { ReactHtmlParser(about.our_story.description) }
                  </div>
                  <div className="col-md-5 offset-md-1">
                    <Image
                      alt="about_image"
                      src={
                        about.our_story.image
                          ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${about.our_story?.image?.url}`
                          : "/about-bathroom.png"
                      }
                      layout="responsive"
                      height="75%"
                      width="100%"
                      objectFit="cover"
                    /> 
                  </div>
                </div>
              </div>
              <div className={"container "}>
                <div className="row">
                  {about.content[0].content.map((content: any, i: number) => (
                    i < 2 ? (
                    <div className="col-md-6 mb-3" key={i}>
                      <div className={"h-100 " + styles.bgcol6}>
                        <h5>{content.title}</h5>
                        <p>{content.description}</p>
                      </div>
                    </div>
                    ) : null
                  ))}
                </div>
                <div className={"row "+ styles.cntRow}>
                  
                  {about.content[0].content.map((content: any, i: number) => (
                    i >= 2 ? (
                    <div className={"col-md-12 " + styles.mb10} key={i}>
                      <h5>{content.title}</h5>
                      <p>{content.description}</p>
                    </div>
                    ) : null
                  ))}
                  
                  <div className={"col-md-12 " + styles.mb35}>
                    <Image
                      alt="banner_image"
                      src={
                        about.bottom_banner.image
                          ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${about.bottom_banner?.image?.url}`
                          : "/ourstory.png"
                      }
                      layout="responsive"
                      height="27%"
                      width="100%"
                      objectFit="fill"
                    /> 
                  </div>
                </div>
                <div className="row">
                  <div className={"col-md-12 text-center " + styles.mb45}>
                    <h2 className={styles.h2title}>
                      <span>{ about.footer_top.title }</span>
                    </h2>
                  </div>
                </div>
                <div className="row">
                  {about.footer_top.content.map((content: any, i: number) => (
                    <div className={"col-md-6 " + styles.mb30}  key={i}>
                      <div className={styles.mb40 + " " + styles.iconBox}>
                        <div>
                          <img
                            src={
                              content.image
                                ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${content.image?.url}`
                                : "/icons/save-water.png"
                            }
                          />
                        </div>
                        <div className={styles.textLeft}>
                          <h5>{content.title}</h5>
                          <p>{content.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                </div>
              </div>
            </div>
          </main>
        </div>
      </LayoutDefault>
    </>
  );
};

export async function getStaticProps() {
  
  // Fetch all categories form API
  const our_story = await fetch(`${process.env.API_BASE_URL}/our-story`);
  
  const about = await our_story.json();

  return {
    props: { about },
    revalidate: 1,
  };
}

export default About;
