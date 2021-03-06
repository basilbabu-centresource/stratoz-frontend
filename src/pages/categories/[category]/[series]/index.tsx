import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../../../layout/Default";
import styles from "../../../../../styles/Categories.module.scss";
import ReactPaginate from "react-paginate";
import Router from "next/router";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../features/auth/authSlice";
import api from "../../../../api";
import router from "next/router";
import Slider from "react-slick";
import Link from "next/link";

const Categories: NextPage = ({
  products,
  category,
  series,
  count,
  cat_listing,
  page,
}: any) => {
  const [productsState, setProductsState] = useState<any>(null);
  const [seriesState, setSeriesState] = useState<any>(null);

  const { user } = useSelector(selectUser);

  const getProductList = async () => {
    // Fetch product list form API
    const productsRes = await api.get(
      `${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/products?category.slug=${category}&series.slug=${series}&_start=${
        (page - 1) * 9
      }&_limit=9`
    );

    const productsArray = productsRes.data;

    setProductsState(productsArray);
  };

  const getSeriesList = async () => {
    // Fetch product list form API
    const seriesRes = await api.get(
      `/product-series?category.slug=${category}`
    );

    console.log(seriesRes);

    const series = seriesRes.data;

    setSeriesState(series);
  };

  useEffect(() => {
    getProductList();
    getSeriesList();
  }, [series, page]);

  useEffect(() => {
    if (!user) return;

    getProductList();
  }, [user]);

  const handlePageChange = (pageNumber: number) => {
    Router.push(`/categories/${category}/${series}/?page=${pageNumber + 1}`);
  };

  const handleAddFavourite = (isFavourite: boolean, productId: number) => {
    if (!user) {
      router.push("/login");
      return;
    }

    if (isFavourite) {
      api.delete(`/unfavorite/${productId}`).then(() => {
        getProductList();
      });
    } else {
      api.post(`/favorite`, { products: productId }).then(() => {
        getProductList();
      });
    }
  };

  const preSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          slidesPerRow: 1,
          rows: 2,
        },
      },
    ],
  };

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
            <div className="container">
              <div className="row">
                <div className={"col-md-3 p-0 " + styles.bg3full}>
                  <div className={styles.titleBox}>
                    <h1>{category}</h1>
                    <ul>
                      <li>
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/products">
                          <a>Products</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={`/categories/${category}`}>
                          <a>{category}</a>
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="#">
                          <a>{series}</a>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div
                    className="accordion filterCheck row"
                    id="accordionExample"
                  >
                    <div className="accordion-item col-md-12 col-6">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Series
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show "
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {seriesState &&
                            seriesState.map((item: any, index: number) => (
                              <div
                                className="example"
                                key={index}
                                onClick={() => {
                                  router.push(
                                    `/categories/${category}/${item.slug}`
                                  );
                                }}
                              >
                                <label className="checkbox-button">
                                  <input
                                    type="radio"
                                    className="checkbox-button__input"
                                    name="choice1"
                                  />
                                  <span className="checkbox-button__control"></span>
                                  <span
                                    className="checkbox-button__label"
                                    style={{ textTransform: "capitalize" }}
                                  >
                                    {item.title}
                                  </span>
                                </label>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                    {/* <div className="accordion-item col-md-12 col-6">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Color
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse filterCheck"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="example">
                            <label className="checkbox-button">
                              <input
                                type="checkbox"
                                className="checkbox-button__input"
                                name="choice1"
                              />
                              <span className="checkbox-button__control"></span>
                              <span className="checkbox-button__label">
                                Undercounter Basins
                              </span>
                            </label>
                          </div>
                          <div className="example">
                            <label className="checkbox-button">
                              <input
                                type="checkbox"
                                className="checkbox-button__input"
                                name="choice1"
                              />
                              <span className="checkbox-button__control"></span>
                              <span className="checkbox-button__label">
                                Wall Mounted Basins
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="col-md-9">
                  <div className={"row " + styles.catList}>
                    <Slider {...preSettings}>
                      {cat_listing.map((cate: any, index: number) => (
                        <div key={index} className="p-2">
                          <a href={`/categories/${cate.slug}`}>
                            <div
                              className={styles.col4img + " " + styles.overlay}
                            >
                              <Image
                                src={
                                  cate.image
                                    ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${cate?.image?.url}`
                                    : "/products/5.png"
                                }
                                alt={cate.name}
                                height="100%"
                                width="100%"
                                layout="responsive"
                              />
                              <div className={styles.middle}>
                                <div className={styles.text}>
                                  <h6 className={styles.active}>{cate.name}</h6>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className="row">
                    <div className="col-md-8"></div>
                  </div>
                  {console.log("products", products)}
                  <div className="row">
                    {productsState?.length === 0 && (
                      <h3 className="mb-5 text-center">Coming soon</h3>
                    )}
                    {productsState
                      ? productsState &&
                        productsState.map((product: any, index: number) => (
                          <>
                            <div
                              key={index}
                              className={"col-md-4 " + styles.mb25}
                            >
                              <div className={styles.col4fav}>
                                <div
                                  onClick={() =>
                                    handleAddFavourite(
                                      product.is_favorite,
                                      product.id
                                    )
                                  }
                                  className="favourite__icon"
                                >
                                  {!product.is_favorite ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-5 w-5"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  )}
                                </div>

                                <div>
                                  <a href={`/products/${product.slug}`}>
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
                                  </a>
                                </div>
                                <div className={styles.favDetails}>
                                  <a href={`/products/${product.slug}`}>
                                    <h4>{product.title}</h4>
                                  </a>
                                  <h5>
                                    {product.code} - <span style={{ textTransform: "capitalize"}} >{product?.colour?.name}</span>
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </>
                        ))
                      : products &&
                        products.map((product: any, index: number) => (
                          <>
                            <div
                              key={index}
                              className={"col-md-4 " + styles.mb25}
                            >
                              <div className={styles.col4fav}>
                                <div
                                  onClick={() => alert("sdsd")}
                                  className="favourite__icon"
                                >
                                  {product.is_favorite ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-5 w-5"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  )}
                                </div>

                                <div>
                                  <a href={`/products/${product.slug}`}>
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
                                  </a>
                                </div>
                                <div className={styles.favDetails}>
                                  <a href={`/products/${product.slug}`}>
                                    <h4>{product.title}</h4>
                                  </a>
                                  <h5>
                                    {product.code} - <span style={{ textTransform: "capitalize"}} >{product?.colour?.name}</span>
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </>
                        ))}
                    {}
                  </div>

                  {count > 9 && (
                    <ReactPaginate
                      previousLabel={"<<"}
                      nextLabel={">>"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={Math.ceil(count / 9)}
                      marginPagesDisplayed={5}
                      pageRangeDisplayed={5}
                      onPageChange={(e: any) => handlePageChange(e.selected)}
                      containerClassName={"pagination pb-4"}
                      activeClassName={"active"}
                    />
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </LayoutDefault>
    </>
  );
};

// This gets called on every request
export async function getServerSideProps({ query }: any) {
  const page = query.page ? Number(query.page) : 1;
  const { category, series } = query;

  // Fetch product list form API
  const productsRes = await fetch(
    `${
      process.env.API_BASE_URL
    }/products?category.slug=${category}&series.slug=${series}&_start=${
      (page - 1) * 9
    }&_limit=9`
  );

  // Fetch product count form API
  const countRes = await fetch(
    `${process.env.API_BASE_URL}/products/count?category.slug=${query.category}&series.slug=${series}`
  );

  const categoriesRes = await fetch(`${process.env.API_BASE_URL}/categories`);

  const cat_listing = await categoriesRes.json();

  const products = await productsRes.json();

  const count = await countRes.json();

  // Pass data to the page via props
  return {
    props: { products, category, series, count, cat_listing, page },
  };
}

export default Categories;
