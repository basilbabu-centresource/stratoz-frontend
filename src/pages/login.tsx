import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../layout/Default";
import styles from "../../styles/Login.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <LayoutDefault>
        <div className={styles.bghero}>
          <div className="container">
            <div className={styles.row}>
              <div className={styles.col6}>
                <div className={styles.bgheroFrom}>
                  <div className={styles.heroFrom}>
                    <h4>Login in to your account</h4>
                    <div className={styles.row}>
                      <div className={styles.col12}>
                        <label>Email</label>
                        <input type="email" placeholder="jonathandoe@gamil.com"/>
                        <label>Mobile</label>
                        <input type="password" placeholder="****************"/>
                        <div className={styles.chkBox}>
                          <input type="checkbox" />
                          <label> Keep me signed in</label>
                        </div>
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.col12}>
                        <input type="submit" value="Sign In" />
                      </div>
                      <div className={styles.col12}>
                        <p>Not Registered? <a>Register Now</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.col6}>
                <div className={styles.titleBox}>
                  <h6>Welcome to</h6>
                  <h1>Stratos Ceramica</h1>
                  <h5>Luxury Redefined</h5>
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
