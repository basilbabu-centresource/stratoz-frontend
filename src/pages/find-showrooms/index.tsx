import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../layout/Default";
import styles from "../../../styles/Showroom.module.scss";
import Hero from "../../components/Showroom/Hero";
import React from "react";

const Showroom: NextPage = () => {
  return (
    <>
      <LayoutDefault>
        <Hero />
        <div className={styles.container}>
          d
          <Head>
            <title>Stratoz</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
            <div className={styles.title_desc}>
              <div className={"container "}>
                <h2 className={styles.h2_title}>
                  <span>Nearest </span> Showroom
                </h2>
                <hr />
                <div
                  className={
                    styles.row +
                    " " +
                    styles.mt45 +
                    " " +
                    styles.mb75 +
                    " " +
                    styles.showroomBox
                  }
                >
                  <div className={styles.col6}>
                    <div className={styles.mapBox}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.78501634987!2d76.23825277912547!3d9.97086729948756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d08f976f3a9%3A0xe9cdb444f06ed454!2sErnakulam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1631084167389!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                  <div className={styles.col5}>
                    <h6>Country</h6>
                    <select>
                      <option>United Arab Emirates</option>
                      <option>Dubai</option>
                    </select>
                    <h6>City</h6>
                    <select>
                      <option>Dubai</option>
                      <option>United Arab Emirates</option>
                    </select>
                    <div className={styles.addressBox + " " + styles.mt15}>
                      <div
                        className={
                          styles.individualBox + " " + styles.activeBox
                        }
                      >
                        <h5>Ababeel Emporio</h5>
                        <p>
                          Thomas Towers Opp. Indira <br />
                          Bhavan Sasthamngalam Road, <br />
                          Vellayambalam - Trivandrum
                        </p>
                      </div>
                      <div className={styles.individualBox}>
                        <h5>Amset Ambience</h5>
                        <p>
                          Thomas Towers Opp. Indira <br />
                          Bhavan Sasthamngalam Road, <br />
                          Vellayambalam - Trivandrum
                        </p>
                      </div>
                      <div className={styles.individualBox}>
                        <h5>Amset Ambience</h5>
                        <p>
                          Thomas Towers Opp. Indira <br />
                          Bhavan Sasthamngalam Road, <br />
                          Vellayambalam - Trivandrum
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

export default Showroom;
