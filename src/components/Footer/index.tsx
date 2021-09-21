import Image from "next/image";
import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className="py-5">
          <div className="container">
            <br />
            <br />
            <br />
            <div className="row">
              <div className="col-lg-2">
                <div className={styles.footer__title}>Categories</div>
                <div className={styles.footer__link}>
                  <a href="#">Basins</a>
                </div>
                <div className={styles.footer__link}>
                  <a href="#">Bathing</a>
                </div>
                <div className={styles.footer__link}>
                  <a href="#">WCS</a>
                </div>
                <div className={styles.footer__link}>
                  <a href="#">Accessories</a>
                </div>
                <div className={styles.footer__link}>
                  <a href="#">Taps</a>
                </div>
                <div className={styles.footer__link}>
                  <a href="#">Showering</a>
                </div>
              </div>
              <div className="col-lg-2">
                <div className={styles.footer__title}>Quick links</div>
                <div className={styles.footer__link}>
                  <a href="#">Contact us</a>
                </div>
                <div className={styles.footer__link}>
                  <Link href="/warranty">
                    <a> Register & Warranty</a>
                  </Link>
                </div>
                {/* <div className={styles.footer__link}>
                  <a href="#">Nearest showrooms</a>
                </div> */}
              </div>
              <div className="col-lg-2">
                <div className={styles.footer__title}>Social media</div>
                <div className={styles.footer__link}>
                  <a
                    href="https://www.facebook.com/stratozceramica/"
                    className="me-2"
                  >
                    <Image
                      src="/icons/facebook.png"
                      alt={"Facebook icon"}
                      height={18}
                      width={18}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/stratoz/"
                    className="me-2"
                  >
                    <Image
                      src="/icons/linkedin.png"
                      alt={"Facebook icon"}
                      height={18}
                      width={18}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/stratoz_ceramica"
                    className="me-2"
                  >
                    <Image
                      src="/icons/instagram.png"
                      alt={"Facebook icon"}
                      height={18}
                      width={18}
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-2"></div>
              <div className="col-lg-4">
                <p className={styles.right__text}>
                  Stratoz Ceramics <br />
                  Redefining luxury
                </p>
                <br />
                <p className={"mt-2 " + styles.newsletter__title}>
                  Subscribe to newsletter{" "}
                </p>
                <form className="form-inline d-flex">
                  <div className="form-group  mb-2">
                    <input
                      type="email"
                      className={"form-control " + styles.newsletter__input}
                      id="inputPassword2"
                      placeholder="Your email  address"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className={"btn " + styles.newsletter__button}
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bktop}>
          <a href="#top"><button><img src="/icons/top.png"/></button></a>
        </div>
      </footer>
      <div className={"py-3 text-center " + styles.footer__text}>
        Copyright Stratoz Ceramica &copy; 2021
      </div>
    </>
  );
};

export default Footer;
