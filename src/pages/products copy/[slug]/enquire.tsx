import type { NextPage } from "next";
import Head from "next/head";
import LayoutDefault from "../../../layout/Default";
import styles from "../../../../styles/Contact.module.scss";
import FormButton from "../../../components/FormButton";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import api from "../../../api";
import { toast } from "react-toastify";

type Inputs = {
  name: string;
  mobile: string;
  email: string;
  subject: string;
  message: string;
};

const Enquire: NextPage = ({ product }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    formState,
  } = useForm<Inputs>();

  const [isLoading, setisLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("form data", data);
    setisLoading(true);

    const formData = {
      name: data.name,
      email: data.email,
      phone: data.mobile,
      subject: data.subject,
      message: data.message,
      product: product.id,
    };

    api
      .post("/product-enquiries", formData)
      .then(() => {
        toast.success("Enquiry submitted successfully.");
        setisLoading(false);
      })
      .catch(() => {
        setisLoading(false);
        toast.error("Something went wrong!");
      });

    // const formData = new FormData();

    // const saticData = {
    //   name: `${data.firstName} ${data.lastName}`,
    //   email: data.email,
    //   phone_number: data.phoneNumber,
    //   store: Number(data.purchasedFrom),
    //   purchase_date: data.dateOfPurchase,
    //   product_code: data.productCode,
    // };

    // formData.append("data", JSON.stringify(saticData));
  };

  return (
    <>
      <LayoutDefault>
        <div className={styles.bghero}>
          <div className="container">
            <div className={styles.bgheroFrom}>
              <div className={styles.heroFrom}>
                <h6>Enquire Now</h6>
                <h1>Stratos Ceramica</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.row}>
                    <div className={styles.col6}>
                      <label>Name</label>
                      <input
                        type="text"
                        placeholder="Jonathan Doe"
                        {...register("name", { required: true })}
                      />
                      <span className="error">
                        {errors.name && errors.name.type === "required" && (
                          <span>Name is required</span>
                        )}
                        {errors.name && errors.name.type === "maxLength" && (
                          <span>Max length exceeded</span>
                        )}
                      </span>
                    </div>
                    <div className={styles.col6}>
                      <label>Mobile</label>
                      <input
                        type="text"
                        placeholder="+976 256474473"
                        {...register("mobile", { required: true })}
                      />
                      <span className="error">
                        {errors.mobile && errors.mobile.type === "required" && (
                          <span>Mobile is required</span>
                        )}
                        {errors.mobile &&
                          errors.mobile.type === "maxLength" && (
                            <span>Max length exceeded</span>
                          )}
                      </span>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.col6}>
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="jonathandoe@gamil.com"
                        {...register("email", { required: true })}
                      />
                      <span className="error">
                        {errors.email && errors.email.type === "required" && (
                          <span>Email is required</span>
                        )}
                        {errors.email && errors.email.type === "maxLength" && (
                          <span>Max length exceeded</span>
                        )}
                      </span>
                    </div>
                    <div className={styles.col6}>
                      <label>Subject</label>
                      <input
                        type="text"
                        placeholder="Enter Subject"
                        {...register("subject", { required: true })}
                      />
                      <span className="error">
                        {errors.subject &&
                          errors.subject.type === "required" && (
                            <span>Subject is required</span>
                          )}
                        {errors.subject &&
                          errors.subject.type === "maxLength" && (
                            <span>Max length exceeded</span>
                          )}
                      </span>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.col12}>
                      <label>Message</label>
                      <textarea
                        placeholder="Enter Message"
                        {...register("message", { required: true })}
                      ></textarea>
                      <span className="error">
                        {errors.message &&
                          errors.message.type === "required" && (
                            <span>Message is required</span>
                          )}
                        {errors.message &&
                          errors.message.type === "maxLength" && (
                            <span>Max length exceeded</span>
                          )}
                      </span>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.col6}>
                      {console.log("Errors", errors)}
                      {/* isValid: {formState.isValid.toString()} <br />
                      isDirty: {formState.isDirty.toString()} */}
                      <FormButton
                        value={"Submit"}
                        loading={isLoading}
                        disabled={false}
                        // disabled={!formState.isValid}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
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

export default Enquire;
