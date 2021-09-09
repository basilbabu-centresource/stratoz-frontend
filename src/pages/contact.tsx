import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../layout/Default";
import styles from "../../styles/Contact.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <LayoutDefault>
        <div className={styles.bghero}>
          <div className="container">
            <div className={styles.bgheroFrom}>
              <div className={styles.heroFrom}>
                <h6>Get in touch with</h6>
                <h1>Stratos Ceramica</h1>
                <div className={styles.row}>
                  <div className={styles.col6}>
                    <label>Name</label>
                    <input type="text" />
                    <label>Email</label>
                    <input type="text" />
                  </div>
                  <div className={styles.col6}>
                    <label>Name</label>
                    <input type="text" />
                    <label>Email</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutDefault>
    </>
  );
};

export default Home;
