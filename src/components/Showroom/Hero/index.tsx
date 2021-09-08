import React from "react";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className="container">
        <h1>
          Find <br />
          <span>Your Showroom </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
