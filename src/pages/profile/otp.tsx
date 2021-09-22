import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../layout/Default";
import styles from "../../../styles/otp.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <LayoutDefault>
        <div className={styles.bghero}>
          <div className={styles.bgContainer}>
            <div className="container">
              <div className={styles.bgheroFrom}>
                <div className={styles.heroFrom}>
                  <h4>Enter OTP</h4>
                  <div className="row">
                    <div className="col-md-12">
                      <label>Enter OTP send to your registered email</label>
                    </div>
                    <div className="col-md-12">
                      <input type="password" placeholder="****************" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <input type="submit" value="Submit" />
                    </div>
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
