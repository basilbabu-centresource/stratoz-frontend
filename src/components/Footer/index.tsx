import Image from "next/image";
import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectMenu } from "../../features/menu/menuSlice";
import api from "../../api";
import { useState } from "react";
import { toast } from "react-toastify";

const Footer: React.FC = () => {
  const { categories } = useSelector(selectMenu);

  const [email, setEmail] = useState(null);

  const handleSubmitNewsletter = (event: any) => {
    event.preventDefault();

    if (!email) return;

    api
      .post("/newsletters", { email })
      .then(() => {
        toast.success("Email submitted successfully");
      })
      .catch(() => {
        toast.error("Something went wrong. try again!");
      });
  };

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
                {categories &&
                  categories.map((category: any, index: number) => (
                    <div className={styles.footer__link} key={index}>
                      <a href={`/categories/${category.slug}`}>
                        {category.name}
                      </a>
                    </div>
                  ))}
              </div>
              <div className="col-lg-2">
                <div className={styles.footer__title}>Quick links</div>
                <div className={styles.footer__link}>
                  <Link href="/contact">
                    <a>Contact us</a>
                  </Link>
                </div>
                <div className={styles.footer__link}>
                  <Link href="/warranty">
                    <a> Register & Warranty</a>
                  </Link>
                </div>
                <div className={styles.footer__link}>
                  <Link href="/find-showrooms">
                    <a>Nearest showrooms</a>
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
                <div className="d-flex align-items-center">
                  <Image
                    src={"/logo-dark.png"}
                    alt={"logo"}
                    height={60}
                    width={40}
                  />
                  <p className={styles.right__text + " ms-3"}>
                    Stratoz Ceramics <br />
                    Redefining luxury
                  </p>
                </div>
                <br />
                <p className={"mt-2 " + styles.newsletter__title}>
                  Subscribe to newsletter{" "}
                </p>
                <form
                  className="form-inline d-flex"
                  onSubmit={handleSubmitNewsletter}
                >
                  <div className="form-group  mb-2">
                    <input
                      type="email"
                      className={"form-control " + styles.newsletter__input}
                      id="inputPassword2"
                      placeholder="Your email  address"
                      onChange={(e: any) => setEmail(e.target.value)}
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
          <a href="#top">
            <button>
              <img src="/icons/top.png" />
            </button>
          </a>
        </div>
      </footer>
      <div className={"py-3 text-center " + styles.footer__text}>
        Copyright Stratoz Ceramica &copy; 2021
      </div>
    </>
  );
};

export default Footer;
