import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../layout/Default";
import styles from "../../../styles/Contact.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <LayoutDefault>
        <div className={styles.bghero}>
          <div className="container">
            <div className={styles.bgheroFrom}>
              <div className={styles.heroFrom}>
                <h6>Get in touch with</h6>
                <h1>Stratoz Ceramica</h1>
                <div className={styles.row}>
                  <div className={styles.col6}>
                    <label>Name</label>
                    <input type="text" placeholder="Jonathan Doe" />
                  </div>
                  <div className={styles.col6}>
                    <label>Mobile</label>
                    <input type="text" placeholder="+976 256474473" />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.col6}>
                    <label>Email</label>
                    <input type="email" placeholder="jonathandoe@gamil.com" />
                  </div>
                  <div className={styles.col6}>
                    <label>Subject</label>
                    <input type="text" placeholder="Enter Subject" />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.col12}>
                    <label>Message</label>
                    <textarea placeholder="Enter Message"></textarea>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.col6}>
                    <input type="submit" value="Submit" />
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
