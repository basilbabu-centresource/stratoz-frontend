import React, { useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
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
            <a href="/our-story" className={styles.main__menu__items}>
              Our story
            </a>
          </div>
          <div className={styles.right__menu}>
            <div className={styles.right__menu__items}>
              <Image
                src={"/icons/search.png"}
                alt="search icon"
                height={18}
                width={18}
              />
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
              <Link href="/login">
                <a>
                  <div className="btn__outline">Sign in</div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
