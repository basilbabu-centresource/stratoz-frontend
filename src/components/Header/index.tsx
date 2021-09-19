import React, { useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { user } = useSelector(selectUser);

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
                    <div className="btn__outline">Edwin</div>
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
