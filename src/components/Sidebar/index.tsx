import React, { useState } from "react";
import styles from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* {isOpen && (
        
      )} */}

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
            <ul className="list-unstyled">
              <li>
                <a>MENU</a>
              </li>
            </ul>
          </>
        ) : (
          <div className={"d-none d-lg-flex " + styles.sidebar}>
            <>Stratoz Versatile Design</>
          </div>
        )}
      </nav>
    </>
  );
};

export default Sidebar;
