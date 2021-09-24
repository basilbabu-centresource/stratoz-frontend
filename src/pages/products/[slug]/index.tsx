import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../../layout/Default";
import styles from "../../../../styles/Products.module.scss";
import router from "next/router";
import axios from "axios";
import api from "../../../api";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/auth/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { SocialMediaIconsReact } from "social-media-icons-react";

const HeartOutlineIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    height="22px"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const HeartSolidIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
    height="22px"
  >
    <path
      fillRule="evenodd"
      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
      clipRule="evenodd"
    />
  </svg>
);

const Products: NextPage = ({ product, slug }: any) => {
  const [isFavourite, setisFavourite] = useState(false);

  const { user } = useSelector(selectUser);

  const handleFavourites = () => {
    const body = { products: product.id };

    if (!user) {
      router.push("/login");
      return;
    }

    if (isFavourite) {
      api.delete(`/unfavorite/${product.id}`).then(() => {
        setisFavourite(false);
      });
    } else {
      api.post(`/favorite`, body).then(() => {
        setisFavourite(true);
      });
    }
  };

  useEffect(() => {
    if (!user) return;

    api.get(`/check-favorite/${product.id}`).then(({ data }) => {
      console.log(data);

      setisFavourite(data.favorite);
    });
  }, [product.id, user]);

  return (
    <>
      <LayoutDefault>
        {console.log(product)}
        <div className={styles.container}>
          <Head>
            <title>Stratoz</title>
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
                  product?.images.length !== 0
                    ? process.env.NEXT_PUBLIC_API_BASE_URL +
                      product.images[0].url
                    : `${process.env.NEXT_PUBLIC_API_BASE_URL}/uploads/counter_basin_500x500_2f4fee6d5e.PNG`
                }
                height={340}
                width={340}
                alt={"sddsd"}
              />
            </div>
            <div className="col-lg-7">
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
              <div className="row mt-4">
                <div className="col-9 d-flex mt-4">
                  <div
                    className="btn btn-primary me-3 w-50"
                    onClick={handleFavourites}
                  >
                    {/* <span>
                    <FontAwesomeIcon icon={faCoffee} />
                  </span> */}
                    {isFavourite ? <HeartSolidIcon /> : <HeartOutlineIcon />}
                    <span className="ms-2">
                      {isFavourite ? "Added " : "Add "}
                      to Favourites
                    </span>
                  </div>
                  <div
                    className="btn btn-outline-primary w-50"
                    onClick={() => router.push(`/products/${slug}/enquire`)}
                  >
                    Enquiry
                  </div>
                </div>
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
                  <div className="me-2">
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      title="twitter"
                    >
                      <svg
                        height={30}
                        width={30}
                        viewBox="4.650000000000002 7.700000000000001 35.699999999999996 30.599999999999998"
                        style={{
                          backgroundColor: "rgb(183, 181, 182)",
                          borderRadius: "10%",
                          borderColor: "rgba(0, 0, 0, 0.25)",
                          borderStyle: "solid",
                          borderWidth: "0px",
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g>
                          <path
                            fill="rgba(255,255,255,1)"
                            id="f_1_"
                            d="M30.526149,16.8457316 C31.4160944,16.2841254 32.0989611,15.3936155 32.41944,14.3328037 C31.5861948,14.8541095 30.6654341,15.2311137 29.6830428,15.4352159 C28.899102,14.5512061 27.7786582,14 26.5386512,14 C24.1597112,14 22.231907,16.0345226 22.231907,18.5435505 C22.231907,18.8997544 22.2676528,19.2468583 22.3416094,19.578362 C18.762106,19.3885599 15.5881317,17.5815398 13.4618771,14.8307092 C13.0908611,15.5041167 12.8788519,16.2841254 12.8788519,17.1161346 C12.8788519,18.6917521 13.6393731,20.0827676 14.7955626,20.8991767 C14.0892763,20.8757764 13.4248987,20.6690741 12.8431062,20.3310703 L12.8431062,20.386971 C12.8431062,22.5891954 14.3271703,24.4261158 16.3005811,24.8421205 C15.9381933,24.9487217 15.558549,25.0020222 15.1641134,25.0020222 C14.8867758,25.0020222 14.6156013,24.9747219 14.3542877,24.9214213 C14.9015672,26.7258414 16.4928685,28.041456 18.3787639,28.0765564 C16.9033281,29.29597 15.0457827,30.021378 13.0279979,30.021378 C12.6804015,30.021378 12.3365029,30.0018778 12,29.9589773 C13.9068498,31.2472916 16.1711569,32 18.6043317,32 C26.5300229,32 30.8614193,25.0761231 30.8614193,19.0713563 C30.8614193,18.8737542 30.858954,18.677452 30.8503258,18.4837498 C31.6921993,17.8428427 32.4243705,17.0420338 33,16.1307237 C32.2271527,16.4921277 31.3963726,16.7365304 30.526149,16.8457316 Z"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="me-2">
                    <SocialMediaIconsReact
                      borderColor="rgba(0,0,0,0.25)"
                      borderWidth="0"
                      borderStyle="solid"
                      icon="facebook"
                      iconColor="rgba(255,255,255,1)"
                      backgroundColor="rgba(183,181,182,1)"
                      iconSize="5"
                      roundness="10%"
                      url="#"
                      size="30"
                    />
                  </div>
                  <div className="me-2">
                    <SocialMediaIconsReact
                      borderColor="rgba(0,0,0,0.25)"
                      borderWidth="0"
                      borderStyle="solid"
                      icon="linkedin"
                      iconColor="rgba(255,255,255,1)"
                      backgroundColor="rgba(183,181,182,1)"
                      iconSize="5"
                      roundness="10%"
                      url="#"
                      size="30"
                    />
                  </div>
                  <SocialMediaIconsReact
                    borderColor="rgba(0,0,0,0.25)"
                    borderWidth="0"
                    borderStyle="solid"
                    icon="instagram"
                    iconColor="rgba(255,255,255,1)"
                    backgroundColor="rgba(183,181,182,1)"
                    iconSize="5"
                    roundness="10%"
                    url="#"
                    size="30"
                  />
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
                        : `${process.env.NEXT_PUBLIC_API_BASE_URL}/uploads/counter_basin_500x500_2f4fee6d5e.PNG`
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
    `${process.env.API_BASE_URL}/products/${query.slug}/`
  );

  const product = await productRes.json();

  // Pass data to the page via props
  return { props: { product, slug: query.slug } };
}

export default Products;
