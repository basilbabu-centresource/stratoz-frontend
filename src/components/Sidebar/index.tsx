import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import Image from "next/image";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <nav className={isOpen ? "sub-menu" : "sub-menu  oppenned"}>
        <div className={styles.sidebar__icon}>
          <button
            className={
              !isOpen
                ? "c-hamburger c-hamburger--htx is-active"
                : "c-hamburger c-hamburger--htx "
            }
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <span>toggle menu</span>
          </button>
        </div>
        {!isOpen ? (
          <>
            <div className={styles.sideMenu}>
              <h6>MENU</h6>
              <h5>CATEGORY</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/categories/basin">Basins</a>
                </li>
                <li>
                  <a href="/categories/wcs">WCS</a>
                </li>
                <li>
                  <a href="/categories/bathing">Bathing</a>
                </li>
                <li>
                  <a href="/categories/taps">Taps</a>
                </li>
              </ul>
              <h5>QUICK LINKS</h5>
              <ul className="list-unstyled">
                <li>
                  <Link href="/contact">
                    <a>Contact Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/warranty">
                    <a>Register & Warranty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/find-showrooms">
                    <a>Nearest Showrooms</a>
                  </Link>
                </li>
              </ul>
              <h5>Social Media</h5>
              <div className={styles.qlinks}>
                <ul className="list-unstyled">
                  <li>
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
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/stratozceramica/"
                      className="me-2"
                    >
                      <Image
                        src="/icons/linkedin.png"
                        alt={"Facebook icon"}
                        height={18}
                        width={18}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/stratozceramica/"
                      className="me-2"
                    >
                      <Image
                        src="/icons/instagram.png"
                        alt={"Facebook icon"}
                        height={18}
                        width={18}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <div className={"d-none d-md-flex " + styles.sidebar}>
            <>Stratoz Versatile Design</>
          </div>
        )}
      </nav>
    </>
  );
};

export default Sidebar;
