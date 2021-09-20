import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../layout/Default";
import styles from "../../../styles/Favorites.module.scss";
import withAuth from "../../hoc/withAuth";

const Favorites: NextPage = () => {
  return (
    <>
      <LayoutDefault>
        <div className={styles.container}>
          <Head>
            <title>Stratoz</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <div className={styles.title_desc}>
              <div className={"container " + styles.mb50}>
                <h2 className={styles.h2_title}>
                  <span>Favourite </span> Products
                </h2>
                <hr />
              </div>
            </div>
            <div className={styles.products}>
              <div className="container">
                <div className={styles.row}>
                  <div className={styles.col4}>
                    <div className={styles.col4fav}>
                      <div className={styles.fIcon}>
                        <img src="/icons/like.svg" />
                      </div>
                      <img src="/product1.png" />
                      <div className={styles.favDetails}>
                        <h4>Marble Countertop Wash Basin</h4>
                        <h5>STL-1905-GR-WB - Grey</h5>
                      </div>
                    </div>
                  </div>
                  <div className={styles.col4}>
                    <div className={styles.col4fav}>
                      <div className={styles.fIcon}>
                        <img src="/icons/like.svg" />
                      </div>
                      <img src="/product2.png" />
                      <div className={styles.favDetails}>
                        <h4>Marble Countertop Wash Basin</h4>
                        <h5>STL-1905-GR-WB - Grey</h5>
                      </div>
                    </div>
                  </div>
                  <div className={styles.col4}>
                    <div className={styles.col4fav}>
                      <div className={styles.fIcon}>
                        <img src="/icons/like.svg" />
                      </div>
                      <img src="/product3.png" />
                      <div className={styles.favDetails}>
                        <h4>Marble Countertop Wash Basin</h4>
                        <h5>STL-1905-GR-WB - Grey</h5>
                      </div>
                    </div>
                  </div>
                  <div className={styles.col4}>
                    <div className={styles.col4fav}>
                      <div className={styles.fIcon}>
                        <img src="/icons/like.svg" />
                      </div>
                      <img src="/product1.png" />
                      <div className={styles.favDetails}>
                        <h4>Marble Countertop Wash Basin</h4>
                        <h5>STL-1905-GR-WB - Grey</h5>
                      </div>
                    </div>
                  </div>
                  <div className={styles.col4}>
                    <div className={styles.col4fav}>
                      <div className={styles.fIcon}>
                        <img src="/icons/like.svg" />
                      </div>
                      <img src="/product2.png" />
                      <div className={styles.favDetails}>
                        <h4>Marble Countertop Wash Basin</h4>
                        <h5>STL-1905-GR-WB - Grey</h5>
                      </div>
                    </div>
                  </div>
                  <div className={styles.col4}>
                    <div className={styles.col4fav}>
                      <div className={styles.fIcon}>
                        <img src="/icons/like.svg" />
                      </div>
                      <img src="/product3.png" />
                      <div className={styles.favDetails}>
                        <h4>Marble Countertop Wash Basin</h4>
                        <h5>STL-1905-GR-WB - Grey</h5>
                      </div>
                    </div>
                  </div>
                  <div className={styles.col4}>
                    <div className={styles.col4fav}>
                      <div className={styles.fIcon}>
                        <img src="/icons/like.svg" />
                      </div>
                      <img src="/product1.png" />
                      <div className={styles.favDetails}>
                        <h4>Marble Countertop Wash Basin</h4>
                        <h5>STL-1905-GR-WB - Grey</h5>
                      </div>
                    </div>
                  </div>
                  <div className={styles.col4}>
                    <div className={styles.col4fav}>
                      <div className={styles.fIcon}>
                        <img src="/icons/like.svg" />
                      </div>
                      <img src="/product2.png" />
                      <div className={styles.favDetails}>
                        <h4>Marble Countertop Wash Basin</h4>
                        <h5>STL-1905-GR-WB - Grey</h5>
                      </div>
                    </div>
                  </div>
                  <div className={styles.col4}>
                    <div className={styles.col4fav}>
                      <div className={styles.fIcon}>
                        <img src="/icons/like.svg" />
                      </div>
                      <img src="/product3.png" />
                      <div className={styles.favDetails}>
                        <h4>Marble Countertop Wash Basin</h4>
                        <h5>STL-1905-GR-WB - Grey</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.navigation}>
              <div className="container">
                <div className={styles.row}>
                  <div className={styles.col12}>
                    <ul>
                      <li className={styles.active}>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>Next</li>
                      <li>Previous</li>
                    </ul>
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

export default withAuth(Favorites);
