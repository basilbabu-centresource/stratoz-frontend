import React, { useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import SBstyles from "../Sidebar/Sidebar.module.scss";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const { user } = useSelector(selectUser);

  const getInitials = (name: any) => {
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");

    let initials = [...name.matchAll(rgx)] || [];

    initials = (
      (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
    ).toUpperCase();

    return initials;
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className="container d-flex justify-content-between ">
          <div className="logoCustom">
            <Link href="/">
              <a>
                <Image src={"/logo.svg"} alt={"logo"} height={60} width={40} />
              </a>
            </Link>
          </div>
          <div className={"d-none d-md-flex " +styles.main__menu}>
            <Link href="/collections">
              <a className={styles.main__menu__items}>Collections</a>
            </Link>
            <Link href="/brochures">
              <a className={styles.main__menu__items}>Brochures</a>
            </Link>
            <Link href="/our-story">
              <a className={styles.main__menu__items}>Our story</a>
            </Link>
          </div>
          <div className={styles.right__menu}>
            <div className={styles.right__menu__items}>
              {!isOpen ? (
                <>
                  <div className={styles.search}>
                    <input
                      type="text"
                      name="search"
                      required
                      aria-label="Search"
                      placeholder="Search here"
                      className="header-search"
                    />
                    <button type="submit">
                      <Image
                        src={"/icons/search.png"}
                        alt="search icon"
                        height={18}
                        width={18}
                      />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
                    <Image
                      src={"/icons/search.png"}
                      alt="search icon"
                      height={18}
                      width={18}
                    />
                  </button>
                </>
              )}
            </div>
            <div className={styles.right__menu__items}>
              <Link href="/products/favourites">
                <a>
                  <Image
                    src={"/icons/favourites.png"}
                    alt="search icon"
                    height={18}
                    width={18}
                  />
                </a>
              </Link>
            </div>
            <div className={styles.right__menu__items}>
              {user ? (
                <Link href="/profile">
                  <a>
                    <div className="btn__outline">
                      {getInitials(user?.name)}
                    </div>
                  </a>
                </Link>
              ) : (
                <Link href="/login">
                  <a>
                    <div className="btn__outline">Sign in</div>
                  </a>
                </Link>
              )}
            </div>
            <div className={"d-md-none " + styles.right__menu__items}>
              <nav className={isActive ? "mobile-menu" : "mobile-menu  oppenned"}>
                <div className={SBstyles.sidebar__icon}>
                  <button
                    className={
                      !isActive
                        ? "c-hamburger c-hamburger--htx is-active"
                        : "c-hamburger c-hamburger--htx "
                    }
                    onClick={() => setIsActive((isActive) => !isActive)}
                  >
                    <span>toggle menu</span>
                  </button>
                </div>
                {!isActive ? (
                  <>
                    <div className={"sideMenu " + SBstyles.sideMenu}>
                      <h6>MENU</h6>
                      <h5>CATEGORY</h5>
                      <ul className="list-unstyled">
                        <li>
                          <a href="">Basins</a>
                        </li>
                        <li>
                          <a href="">WCS</a>
                        </li>
                        <li>
                          <a href="">Taps</a>
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
                  <></>
                )}
              </nav>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Header;
