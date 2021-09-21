import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import Image from "next/image";

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
                  <a href="/categories/baths">Baths</a>
                </li>
                <li>
                  <a href="">Showering</a>
                </li>
              </ul>
              <h5>QUICK LINKS</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">Register & Warranty</a>
                </li>
                <li>
                  <a href="">Nearest Showrooms</a>
                </li>
              </ul>
              <h5>QUICK LINKS</h5>
              <div className={styles.qlinks}>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="me-2">
                      <Image
                        src="/icons/facebook.png"
                        alt={"Facebook icon"}
                        height={18}
                        width={18}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="me-2">
                      <Image
                        src="/icons/linkedin.png"
                        alt={"Facebook icon"}
                        height={18}
                        width={18}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="me-2">
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
