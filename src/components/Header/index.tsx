import React, { useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import router from "next/router";
import SBstyles from "../Sidebar/Sidebar.module.scss";
import { selectMenu } from "../../features/menu/menuSlice";

const CloseIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 w19"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const { user } = useSelector(selectUser);

  const { categories } = useSelector(selectMenu);

  const [keyword, setKeyword] = useState("");

  const getInitials = (name: any) => {
    if (!name) return null;

    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");

    let initials = [...name.matchAll(rgx)] || [];

    initials = (
      (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
    ).toUpperCase();

    return initials;
  };

  const handleSearch = (event: any) => {
    event?.preventDefault();
    router.push(`/products/search?q=${keyword}`);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className="container headContainer d-flex justify-content-between ">
          <div className="logoCustom">
            <Link href="/">
              <a>
                <Image src={"/logo.svg"} alt={"logo"} height={60} width={40} />
              </a>
            </Link>
          </div>
          <div className={"d-none d-md-flex " + styles.main__menu}>
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
                    <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
                      <CloseIcon />
                    </button>
                    <form onSubmit={handleSearch}>
                      <input
                        type="text"
                        name="search"
                        required
                        aria-label="Search"
                        placeholder="Search here"
                        className="header-search"
                        onChange={(e: any) => {
                          setKeyword(e.target.value);
                        }}
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
                    </form>
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
            <div className={"d-none d-md-flex " + styles.right__menu__items}>
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
            <div className={"d-none d-md-flex " + styles.right__menu__items}>
              {user ? (
                <Link href="/profile">
                  <a>
                    <div className="btn__outline">
                      {getInitials(user?.name) || "JD"}
                    </div>
                  </a>
                </Link>
              ) : (
                <Link href="/login">
                  <a>
                    <div className={styles.sigBtn + " btn__outline"}>
                      Sign in
                    </div>
                  </a>
                </Link>
              )}
            </div>

            {isOpen ? (
              <>
                <div className={"d-md-none " + styles.right__menu__items}>
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
                <div className={"d-md-none " + styles.right__menu__items}>
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
                        <div className={styles.sigBtn + " btn__outline"}>
                          Sign in
                        </div>
                      </a>
                    </Link>
                  )}
                </div>
              </>
            ) : null}

            <div className={"d-md-none " + styles.right__menu__items}>
              <nav
                className={isActive ? "mobile-menu" : "mobile-menu  oppenned"}
              >
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
                        {categories &&
                          categories.slice()
                          .sort((a: any, b:any) => a.weight > b.weight ? 1 :-1)
                          .map((category: any, index: number) => (
                            <li key={index}>
                              <a href={`/categories/${category.slug}`}>
                                {category.name}
                              </a>
                            </li>
                          ))}
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
                        <li>
                          <Link href="/collections">
                            <a>Collections</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/brochures">
                            <a>Brochures</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/our-story">
                            <a>Our story</a>
                          </Link>
                        </li>
                      </ul>
                      <h5>Social Media</h5>
                      <div className={"smlinks " + styles.qlinks}>
                        <ul className="list-unstyled">
                          <li>
                            <a
                              href="https://www.facebook.com/stratozceramica/"
                              className="me-2"
                            >
                              <Image
                                src="/icons/facebookMob.png"
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
                                src="/icons/linkedinMob.png"
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
                                src="/icons/instagramMob.png"
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
