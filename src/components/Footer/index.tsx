import Image from "next/image";
import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-light">
        <div className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <h5>Categories</h5>
                <div>
                  <a href="#">Basins</a>
                </div>
              </div>
              <div className="col-lg-2">
                <h5>Quick links</h5>
                <div>
                  <a href="#">Basins</a>
                </div>
              </div>
              <div className="col-lg-2">
                <h5>Social media</h5>
                <div>
                  <a href="#">Basins</a>
                </div>
              </div>

              <div className="col-lg-2"></div>
              <div className="col-lg-4">
                <h5>Stratoz Ceramics</h5>
                <div>
                  <a href="#">Basins</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-3 text-center">
        Copyright Stratos Ceramica &copy; 2021
      </div>
    </>
  );
};

export default Footer;
