import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../layout/Default";
import styles from "../../styles/ChangePassword.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <LayoutDefault>
        <div className={styles.bghero}>
          <div className="container">
            <div className={styles.bgheroFrom}>
              <div className={styles.heroFrom}>
                <h4>Change Password</h4>
                <div className={styles.row}>
                  <div className={styles.col12}>
                    <label>Password</label>
                    <input type="password" placeholder="****************"/>
                    <label>Password</label>
                    <input type="password" placeholder="****************"/>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.col12}>
                    <input type="submit" value="Change" />
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
