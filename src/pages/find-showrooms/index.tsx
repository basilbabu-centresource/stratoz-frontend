import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../layout/Default";
import styles from "../../../styles/Showroom.module.scss";
import Hero from "../../components/Showroom/Hero";
import React, { useState, useEffect } from "react";
import api from "../../api";

const Showroom: NextPage = () => {
  const [stores, setStores] = useState([]);

  const [cities, setCities] = useState<any>([]);

  const [countries, setCountries] = useState([]);

  const [selectedStore, setSelectedStore] = useState(null);

  const [selectedCity, setSelectedCity] = useState<any>(null);

  const [selectedCountry, setsetSelectedCountry] = useState<any>(null);

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    if (!selectedCountry) return;

    fetchCities(selectedCountry);
  }, [selectedCountry]);

  useEffect(() => {
    if (!selectedCity) return;

    fetchStores(selectedCity);
  }, [selectedCity]);

  const fetchCities = (countryCode: any) => {
    api.get(`/cities?country.code=${countryCode}`).then(({ data }) => {
      console.log("Cities", data);

      setCities(data);
    });
  };

  const fetchCountries = () => {
    api.get("/countries").then(({ data }) => {
      console.log("Countries", data);

      setCountries(data);
    });
  };

  const fetchStores = (cityId: number) => {
    api.get(`/store-details?city.id=${cityId}`).then(({ data }) => {
      // setCities(data);
      setStores(data);

      console.log("Stores", stores);
    });
  };

  const handleCityChange = () => {};

  const handleCountryChange = () => {};

  const handleStoreChange = () => {};

  return (
    <>
      <LayoutDefault>
        <Hero />
        <div className={styles.container}>
          d
          <Head>
            <title>Stratoz</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
            <div className={styles.title_desc}>
              <div className={"container "}>
                <h2 className={styles.h2_title}>
                  <span>Nearest </span> Showroom
                </h2>
                <hr />
                <div
                  className={
                    styles.row +
                    " " +
                    styles.mt45 +
                    " " +
                    styles.mb75 +
                    " " +
                    styles.showroomBox
                  }
                >
                  <div className={styles.col6}>
                    <div className={styles.mapBox}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.78501634987!2d76.23825277912547!3d9.97086729948756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d08f976f3a9%3A0xe9cdb444f06ed454!2sErnakulam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1631084167389!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                  <div className={styles.col5}>
                    <h6>Country</h6>
                    <select
                      onChange={(e) => setsetSelectedCountry(e.target.value)}
                    >
                      <option value="">Choose Country</option>
                      {/* <option>United Arab Emirates</option>
                      <option>Dubai</option> */}
                      {countries.map((country: any, index: number) => (
                        <option value={country.code} key={index}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <h6>City</h6>
                    <select onChange={(e) => setSelectedCity(e.target.value)}>
                      <option value="">Choose City</option>
                      {cities.map((country: any, index: number) => (
                        <option value={country.id} key={index}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <div className={styles.addressBox + " " + styles.mt15}>
                      {/* <div
                        className={
                          styles.individualBox + " " + styles.activeBox
                        }
                      >
                        <h5>Ababeel Emporio</h5>
                        <p>
                          Thomas Towers Opp. Indira <br />
                          Bhavan Sasthamngalam Road, <br />
                          Vellayambalam - Trivandrum
                        </p>
                      </div> */}
                      {/* <div className={styles.individualBox}>
                        <h5>Amset Ambience</h5>
                        <p>
                          Thomas Towers Opp. Indira <br />
                          Bhavan Sasthamngalam Road, <br />
                          Vellayambalam - Trivandrum
                        </p>
                      </div> */}

                      {stores.map((store: any) => (
                        <>
                          <div className={styles.individualBox}>
                            {console.log(store)}
                            <h5>{store.name}</h5>
                            <p>{store.address_line_1}</p>
                          </div>
                        </>
                      ))}
                      {/* <div className={styles.individualBox}>
                        <h5>Amset Ambience</h5>
                        <p>
                          Thomas Towers Opp. Indira <br />
                          Bhavan Sasthamngalam Road, <br />
                          Vellayambalam - Trivandrum
                        </p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </LayoutDefault>
    </>
  );
};

export default Showroom;
