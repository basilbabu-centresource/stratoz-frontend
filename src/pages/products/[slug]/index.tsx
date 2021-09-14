import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../../layout/Default";
import styles from "../../../../styles/Products.module.scss";
import Hero from "../../../components/Products/Hero";

const Products: NextPage = ({ product }: any) => {
  return (
    <>
      <LayoutDefault>
        <div className={styles.container}>
          <Head>
            <title>Stratos</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        </div>
        <br />
        <br />
        <br />
        <div className="mb-5"></div>
        <div className="mt-5"></div>
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-5">
              <Image
                src={
                  product.images.length !== 0
                    ? process.env.NEXT_PUBLIC_API_BASE_URL +
                      product.images[0].url
                    : "http://192.168.1.13:1339/uploads/counter_basin_500x500_2f4fee6d5e.PNG"
                }
                height={340}
                width={340}
                alt={"sddsd"}
              />
            </div>
            <div className="col-lg-7">
              {/* {JSON.stringify(product)} */}

              {console.log(product)}
              <h1 className="product__title mb-4">{product.title}</h1>
              <h4>Product description</h4>
              <p>{product.code}</p>
              <p>
                SIZE: {product.size.Height} x {product.size.Width} x{" "}
                {product.size.Length} MM
              </p>
              {product.avail_colours.length > 0 && (
                <div className="d-flex align-items-center">
                  <span className="me-3">Color:</span>
                  {product.avail_colours.map((item: any, index: number) => (
                    <a href={`/products/${item.product.slug}`} key={index}>
                      <div
                        key={index}
                        className="me-2"
                        style={{
                          height: "30px",
                          width: "30px",
                          backgroundColor: item.colour.code,
                          border: "1px solid #000",
                        }}
                      ></div>
                    </a>
                  ))}
                </div>
              )}
              <div className="d-flex mt-4">
                <div className="btn btn-primary me-3">Add to Favourites</div>
                <div className="btn btn-outline-primary">Enquiry</div>
              </div>
              <div className="mt-5 mb-3">
                {product.technical_specs && (
                  <a
                    href={
                      process.env.NEXT_PUBLIC_API_BASE_URL +
                      product.technical_specs.url
                    }
                    download
                  >
                    Technical specifications
                  </a>
                )}
              </div>
              <div>
                <h5 className="mb-4">Share this on</h5>
                <div className="d-flex">
                  <div className="social__media__icons"></div>
                  <div className="social__media__icons"></div>
                  <div className="social__media__icons"></div>
                  <div className="social__media__icons"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container"></div>
        <br />
        <br />
        <div className="bg-light py-5">
          <div className="container">
            <h3 className="section__title mb-5">
              <span>Related</span> Products
            </h3>
            <div className="d-flex justify-content-between">
              {product?.related_products.map((item: any, index: number) => (
                <div key={index}>
                  <Image
                    src={
                      item.images.length !== 0
                        ? process.env.NEXT_PUBLIC_API_BASE_URL +
                          item.images[0].url
                        : "http://192.168.1.13:1339/uploads/counter_basin_500x500_2f4fee6d5e.PNG"
                    }
                    height={340}
                    width={340}
                    alt={"sddsd"}
                  />
                  <h3>{item.title}</h3>
                  <div>{item.code} </div>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container"></div>
      </LayoutDefault>
    </>
  );
};

export async function getServerSideProps({ query }: any) {
  // Fetch product list form API
  const productRes = await fetch(
    `http://192.168.1.13:1339/products/${query.slug}`
  );

  const product = await productRes.json();

  // Pass data to the page via props
  return { props: { product } };
}

export default Products;