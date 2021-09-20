import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../layout/Default";
import styles from "../../../styles/MyProfile.module.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const Home: NextPage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <LayoutDefault>
        <div className={styles.bghero}>
          <div className="container">
            <div className={styles.bgheroFrom}>
              <div className={styles.profilerow}>
                <div className={styles.row + " " + styles.profile}>
                  <div className={styles.col5}>
                    <h4>My Account</h4>
                    <div className={styles.picEdit}>
                      <div className={styles.proPic}>
                        <img src="/pic.png" />
                      </div>
                      <div className={styles.camIcon}>
                        <a href="#">
                          <img src="/icons/cam.png" />
                        </a>
                      </div>
                    </div>
                    <h2>Jonathan Doe</h2>
                  </div>
                  <div className={styles.col7}>
                    <div className={styles.btn + " me-1"}>
                      <button onClick={() => dispatch(logout())}>Logout</button>

                      <a href="#" className="ms-1">
                        <button>Edit Profile</button>
                      </a>
                    </div>
                    <div className={styles.proDetails}>
                      <p>Name : Jonathan Doe</p>
                      <p>Mobile : +976 2564*****</p>
                      <p className={styles.pmt20}>
                        Email : jona****doe@gmail.com
                      </p>
                      <p>
                        Password : *************
                        <a href="#">
                          <img src="/icons/edit.png" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.row}>
                  <img src="/logobg.png" />
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
