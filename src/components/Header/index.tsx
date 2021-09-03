import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <div>
            <Image src={"/logo.svg"} alt={"logo"} height={60} width={40} />
          </div>
          <div className={styles.main__menu}>
            <div className={styles.main__menu__items}>Collections</div>
            <div className={styles.main__menu__items}>Brochures</div>
            <div className={styles.main__menu__items}>Our story</div>
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
              <Image
                src={"/icons/favourites.png"}
                alt="search icon"
                height={18}
                width={18}
              />
            </div>
            <div className={styles.right__menu__items}>
              <div className="btn__outline">Sign in</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
