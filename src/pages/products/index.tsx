import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../layout/Default";
import styles from "../../../styles/Products.module.scss";
import Hero from "../../components/Products/Hero";

const Products: NextPage = () => {
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
              <div className={"container " + styles.mb50}>
                <h2 className={styles.h2_title}>
                  <span>Explore</span> Products
                </h2>
                <hr/>
                <p>Design a space perfectly tailored for your personal needs and transform the everyday bathroom experience with our range of products. It is the freedom to create a space that is connected to one’s own senses and needs – a place for inner contemplation, regeneration, and revitalization </p>
                <p>Our curated collections offer you a variety of high-quality solutions for a wide range of styles which guarantees aesthetic longevity.</p>
              </div>
            </div>
            <div className={styles.products}>
              <div className="container">
                <div className={styles.row}>
                  <div className={styles.col4}>
                    <div className={styles.col4img}>
                      <img src="/products/1.png"/>
                      <h6>Basin</h6>
                    </div>
                  </div>
                  <div className={styles.col4}>
                    <div className={styles.col4img}>
                      <img src="/products/2.png"/>
                      <h6>Basin</h6>
                    </div>
                  </div>
                  <div className={styles.col4}>
                    <div className={styles.col4img}>
                      <img src="/products/3.png"/>
                      <h6>Basin</h6>
                    </div>
                  </div>
                  <div className={styles.col4}>
                    <div className={styles.col4img}>
                      <img src="/products/4.png"/>
                      <h6>Basin</h6>
                    </div>
                  </div>
                  <div className={styles.col4}>
                    <div className={styles.col4img}>
                      <img src="/products/5.png"/>
                      <h6>Basin</h6>
                    </div>
                  </div>
                  <div className={styles.col4}>
                    <div className={styles.col4img}>
                      <img src="/products/6.png"/>
                      <h6>Basin</h6>
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

export default Products;
