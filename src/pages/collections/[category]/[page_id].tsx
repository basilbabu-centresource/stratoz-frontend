import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../../layout/Default";
import styles from "../../../../styles/Favorites.module.scss";
import ReactPaginate from "react-paginate";
import Router from "next/router";

const Collections: NextPage = ({ products, category, count }: any) => {
    const handlePageChange = (pageNumber: number) => {
        console.log(pageNumber + 1);

        Router.push(`/collections/${category}/${pageNumber + 1}`);
    };

    return (
        <>
            <LayoutDefault>
                <div className={styles.container}>
                    <Head>
                        <title>Stratoz</title>
                        <meta
                            name="description"
                            content="Generated by create next app"
                        />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    {console.log("Count", Math.round(count / 9))}
                    <main className={styles.main}>
                        <div className={styles.title_desc}>
                            <div className={"container " + styles.mb50}>
                                <h2 className={styles.h2_title}>
                                    <span>Favourite </span> Products
                                </h2>
                                {console.log(products)}
                                <hr />
                            </div>
                        </div>
                        <div className={styles.products}>
                            <div className="container">
                                <div className={styles.row}>
                                    {products.map((product: any) => (
                                        <>
                                            <a
                                                href={`/products/${product.slug}`}
                                            >
                                                <div className={styles.col4}>
                                                    <div
                                                        className={
                                                            styles.col4fav
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.fIcon
                                                            }
                                                        >
                                                            <img src="/icons/like.svg" />
                                                        </div>
                                                        <img src="/product2.png" />
                                                        <div
                                                            className={
                                                                styles.favDetails
                                                            }
                                                        >
                                                            <h4>
                                                                {product.title}
                                                            </h4>
                                                            <h5>
                                                                product_code -{" "}
                                                                {
                                                                    product
                                                                        ?.colour
                                                                        ?.name
                                                                }
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
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
                                    onPageChange={(e: any) =>
                                        handlePageChange(e.selected)
                                    }
                                    containerClassName={"pagination"}
                                    activeClassName={"active"}
                                />
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
        }&_start=${pageId * 9}&_limit=9`
    );

    // Fetch product count form API
    const countRes = await fetch(
        `${process.env.API_BASE_URL}/products/count?category.slug=${query.category}`
    );

    const products = await productsRes.json();

    const count = await countRes.json();

    const { category } = query;

    // Pass data to the page via props
    return { props: { products, category, count } };
}

export default Collections;
