import type { NextPage } from "next";
import Head from "next/head";
import LayoutDefault from "../../layout/Default";
import styles from "../../../styles/Favorites.module.scss";
import withAuth from "../../hoc/withAuth";
import { useEffect } from "react";
import api from "../../api";
import useFavourites from "../../hooks/useFavourites";
import Image from "next/image";

const Favorites: NextPage = () => {
  const { data } = useFavourites();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <LayoutDefault>
        <div className={styles.container}>
          <Head>
            <title>Stratoz</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <div className={styles.title_desc}>
              <div className={"container " + styles.mb50}>
                <h2 className={styles.h2_title}>
                  <span>Favourite </span> Products
                </h2>
              </div>
            </div>

            <div className={styles.products}>
              <div className="container">
                <div className="row">
                  {data && data[0]?.products.length === 0 && (
                    <h3>There are no favourite products yet. </h3>
                  )}
                  {data &&
                    data[0]?.products.map((product: any, index: number) => (
                      <div className="col-md-4 col-6 mb-4" key={index}>
                        <a href={"/products/" + product.slug}>
                          {console.log(product)}
                          <div className={styles.col4fav}>
                            <div className={styles.fIcon}>
                              <img src="/icons/like.svg" />
                            </div>
                            <Image
                              alt="product_image"
                              src={
                                product.images[0]
                                  ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${product.images[0].url}`
                                  : "/product2.png"
                              }
                              layout="responsive"
                              height="100%"
                              width="100%"
                              objectFit="cover"
                            />
                            <div className={styles.favDetails}>
                              <h4 className="mt-4">{product.title}</h4>
                              <h5>
                                {" "}
                                {product.code} - {product?.colour?.name}
                              </h5>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            {/* <div className={styles.navigation}>
              <div className="container">
                <div className={styles.row}>
                  <div className={styles.col12}>
                    <ul>
                      <li className={styles.active}>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>Next</li>
                      <li>Previous</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </main>
        </div>
      </LayoutDefault>
    </>
  );
};

export default withAuth(Favorites);