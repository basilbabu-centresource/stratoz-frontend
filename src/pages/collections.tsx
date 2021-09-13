import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../layout/Default";
import styles from "../../styles/Collections.module.scss";
import Hero from "../components/Collections/Hero";
import React, { Component, useState } from "react";

const Collections: NextPage = () => {
  
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
              <div className={"container " + styles.mb70}>
                <div className={styles.row}>
                  <div className={styles.col5}>
                    <div className={styles.overlayHalf}>
                      <img src="/collections/1.png" className={styles.overlayImg}/>
                      <div className={styles.overlayContent}>ALASK</div>
                    </div>
                  </div>
                  <div className={styles.col7}>
                    <div className={styles.row + " "+ styles.mb40}>
                      <div className={styles.col4}>
                        <div className={styles.overlay}>
                          <img src="/collections/2.png" className={styles.image} />
                          <div className={styles.middle}>
                            <div className={styles.text}>ORION</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.col4}>
                        <div className={styles.overlay}>
                          <img src="/collections/3.png" className={styles.image} />
                          <div className={styles.middle}>
                            <div className={styles.text}>ARAZ</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.col4}>
                        <div className={styles.overlay}>
                          <img src="/collections/4.png" className={styles.image} />
                          <div className={styles.middle}>
                            <div className={styles.text}>FUSION</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.col4}>
                        <div className={styles.overlay}>
                          <img src="/collections/5.png" className={styles.image} />
                          <div className={styles.middle}>
                            <div className={styles.text}>MIRRORS</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.col8}>
                        <div className={styles.overlay}>
                          <img src="/collections/6.png" className={styles.image} />
                          <div className={styles.middle}>
                            <div className={styles.text}>OVO</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.row}>
                  
                </div>
              </div>
            </div>
          </main>
        </div>
      </LayoutDefault>
    </>
  );
};

export default Collections;
