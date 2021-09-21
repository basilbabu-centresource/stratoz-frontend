import type { NextPage } from "next";
import Head from "next/head";
import LayoutDefault from "../../layout/Default";
import styles from "../../../styles/Favorites.module.scss";
import { useEffect } from "react";
import useFavourites from "../../hooks/useFavourites";
import Image from "next/image";
import { useRouter } from "next/router";
import api from "../../api";
import { useState } from "react";

const searchProducts = (keyword: string) => {
  api.get(`/search?q=${keyword}`).then((res) => {});
};

const Search: NextPage = () => {
  const { data } = useFavourites();

  const { query } = useRouter();

  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query.q) return;

    // alert(query.q);
  }, [query.q]);

  return (
    <>
      <LayoutDefault>
        <div className={styles.container}>
          <Head>
            <title>Stratos</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <div className={styles.title_desc}>
              <div className={"container " + styles.mb50}>
                <h2 className={styles.h2_title}>
                  <span>Search results </span> for '{query.q}''
                </h2>
                <hr />
              </div>
            </div>

            <div className={styles.products}>
              <div className="container">
                <div className="row">
                  {console.log("data", data)}
                  {results.length === 0 && (
                    <h3>There are no resulsts for "{query.q}".</h3>
                  )}
                  {/* {data &&
                    data[0].products.map((product: any, index: number) => (
                      <div className="col-md-4 " key={index}>
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
                    ))} */}
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

export default Search;
