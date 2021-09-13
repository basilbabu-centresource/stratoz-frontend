import React, { useState } from "react";
import styles from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <div className={"d-none d-lg-flex " + styles.sidebar}>
      <div className={styles.sidebar__icon}>=</div>
      Stratoz Versatile Design
    </div>
  );
};

export default Sidebar;
