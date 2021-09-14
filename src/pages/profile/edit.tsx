import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../layout/Default";
import styles from "../../../styles/EditProfile.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <LayoutDefault>
        <div className={styles.bghero}>
          <div className="container">
            <div className={styles.bgheroFrom}>
              <div className={styles.heroFrom}>
                <h4>Edit Profile</h4>
                <div className={styles.row}>
                  <div className={styles.col12}>
                    <label>Name</label>
                    <input type="text" placeholder="Jonathan Doe" />
                    <label>Email</label>
                    <input type="email" placeholder="jonathandoe@gamil.com" />
                    <label>Mobile</label>
                    <input type="text" placeholder="+976 256474473" />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.col12}>
                    <input type="submit" value="Save" />
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
