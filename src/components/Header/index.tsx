import React, { useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
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
        <div className="container d-flex justify-content-between">
          <div>
            <Link href="/">
              <a>
                <Image src={"/logo.svg"} alt={"logo"} height={60} width={40} />
              </a>
            </Link>
          </div>
          <div className={styles.main__menu}>
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#fff"
                        height="22px"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#fff"
                      height="22px"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>
            <div className={styles.right__menu__items}>
              <Link href="/products/favourites">
                <a>
                  <span style={{ color: "#fff" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="22px"
                      stroke="#fff"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                      Favs
                    </svg>
                  </span>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
