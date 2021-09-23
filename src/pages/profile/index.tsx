import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../layout/Default";
import styles from "../../../styles/MyProfile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/auth/authSlice";
import Link from "next/link";

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const { user } = useSelector(selectUser);

  return (
    <>
      <LayoutDefault>
        <div className={styles.bghero}>
          <div className={styles.bgContainer}>
            <div className="container">
              <div className={styles.bgheroFrom}>
                <div className={styles.profilerow}>
                  <div className={"row " + styles.profile}>
                    <div className={"col-md-5 "+ styles.col5}>
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
                      <h2>{user?.name}</h2>
                    </div>
                    <div className={"col-md-7 "+styles.col7}>
                      <div className={styles.btn + " me-1"}>
                        <button onClick={() => dispatch(logout())}>Logout</button>

                        <Link href="/profile/edit">
                          <a href="#" className="ms-1">
                            <button>Edit Profile</button>
                          </a>
                        </Link>
                      </div>
                      <div className={styles.proDetails}>
                        <p>Name : {user?.name}</p>
                        <p>Mobile : {user?.mobile}</p>
                        <p className={styles.pmt20}>Email : {user?.email}</p>
                        <p>
                          Password : *************
                          <Link href="/profile/change-password">
                            <a href="#">
                              <img src="/icons/edit.png" />
                            </a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <img className="w-100" src="/logobg.png" />
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
