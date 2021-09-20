import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../../layout/Default";
import styles from "../../../../styles/Categories.module.scss";
import ReactPaginate from "react-paginate";
import Router from "next/router";

const Categories: NextPage = ({
  products,
  category,
  count,
  cat_listing,
}: any) => {
  const handlePageChange = (pageNumber: number) => {
    //console.log(pageNumber + 1);

    Router.push(`/categories/${category}/${pageNumber + 1}`);
  };

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
            <div className="container">
              <div className="row">
                <div className={"col-md-3 p-0 " + styles.bg3full}>
                  <div className={styles.titleBox}>
                    <h1>{category}</h1>
                    <ul>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Products</a>
                      </li>
                      <li>
                        <a href="">{category}</a>
                      </li>
                    </ul>
                  </div>

                  <div className="accordion filterCheck" id="accordionExample">
                    <div className="accordion-item">
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
                          <div className="example">
                            <label className="checkbox-button">
                              <input
                                type="checkbox"
                                className="checkbox-button__input"
                                name="choice1"
                                checked
                              />
                              <span className="checkbox-button__control"></span>
                              <span className="checkbox-button__label">
                                Colors of Art Wash Basins
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
                                Countertop Basins
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
                                Free Standing Basins
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
                                Integrated Basins
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
                                Stone Countertop Basins
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
                    </div>
                    <div className="accordion-item">
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
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className={"row " + styles.catList}>
                    {cat_listing.map((category: any, index: number) => (
                      <div key={index} className="col-md-2">
                        <a href={`/categories/${category.slug}`}>
                          <div
                            className={styles.col4img + " " + styles.overlay}
                          >
                            <Image
                              src={
                                category.image
                                  ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${category?.image?.url}`
                                  : "/products/5.png"
                              }
                              alt={category.name}
                              height={400}
                              width={500}
                            />
                            <div className={styles.middle}>
                              <div className={styles.text}>
                                <h6>{category.name}</h6>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="row">
                    <div className="col-md-8">
                      <div className={styles.searchProduct}>
                        <div className="m-auto">
                          <button>
                            <img src="/icons/searchpl.png" />
                          </button>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {console.log("products", products)}
                  <div className="row">
                    {products &&
                      products.map((product: any, index: number) => (
                        <>
                          <div
                            key={index}
                            className={"col-md-4 " + styles.mb25}
                          >
                            <a href={`/products/${product.slug}`}>
                              <div className={styles.col4fav}>
                                {/* <div className={styles.fIcon}>
                                  <Image
                                    src="/icons/like.svg"
                                    alt="favourite-icon"
                                    height={50}
                                    width={50}
                                  />
                                </div> */}

                                <div>
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
                                </div>
                                <div className={styles.favDetails}>
                                  <h4>{product.title}</h4>
                                  <h5>
                                    {product.code} - {product?.colour?.name}
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </div>
                        </>
                      ))}
                  </div>

                  <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={Math.round(count / 9)}
                    marginPagesDisplayed={5}
                    pageRangeDisplayed={5}
                    onPageChange={(e: any) => handlePageChange(e.selected)}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                  />
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
  const pageId = query.page_id ? Number(query.page_id) : 1;

  // Fetch product list form API
  const productsRes = await fetch(
    `${process.env.API_BASE_URL}/products?category.slug=${
      query.category
    }&_start=${(pageId - 1) * 9}&_limit=9`
  );

  console.log(
    "URL",
    `${process.env.API_BASE_URL}/products?category.slug=${
      query.category
    }&_start=${(pageId - 1) * 9}&_limit=9`
  );

  console.log("PageId", pageId);

  // Fetch product count form API
  const countRes = await fetch(
    `${process.env.API_BASE_URL}/products/count?category.slug=${query.category}`
  );

  const categoriesRes = await fetch(`${process.env.API_BASE_URL}/categories`);

  const cat_listing = await categoriesRes.json();

  const products = await productsRes.json();

  const count = await countRes.json();

  const { category } = query;

  // Pass data to the page via props
  return { props: { products, category, count, cat_listing } };
}

export default Categories;
