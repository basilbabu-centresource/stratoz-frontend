import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../layout/Default";
import styles from "../../../styles/Register.module.scss";

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
                    <h4>Create your account</h4>
                    <div className={styles.row}>
                      <div className={styles.col12}>
                        <label>Name</label>
                        <input type="text" placeholder="Jonathan Doe" />
                        <label>Email</label>
                        <input
                          type="email"
                          placeholder="jonathandoe@gamil.com"
                        />
                        <label>Mobile</label>
                        <input type="text" placeholder="+976 256474473" />
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.col6}>
                        <label>Password</label>
                        <input type="password" placeholder="****************" />
                      </div>
                      <div className={styles.col6}>
                        <label>Repeat Password</label>
                        <input type="password" placeholder="****************" />
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.col12}>
                        <input type="submit" value="Sign Up" />
                      </div>
                      <div className={styles.col12}>
                        <p>
                          <a>Sign in instead</a>
                        </p>
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
