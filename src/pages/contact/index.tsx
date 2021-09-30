import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../layout/Default";
import styles from "../../../styles/Contact.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import api from "../../api";
import { toast } from "react-toastify";
import { useState } from "react";
import FormButton from "../../components/FormButton";

type Inputs = {
  name: string;
  mobile: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
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
    };

    api
      .post("/contact-uses", formData)
      .then(() => {
        toast.success("Message sent successfully.");
        setisLoading(false);
      })
      .catch(() => {
        setisLoading(false);
        toast.error("Something went wrong!");
      });
  };

  return (
    <>
      <LayoutDefault>
        <div className={styles.bghero}>
          <div className="container">
            <div className={styles.bgheroFrom}>
              <div className={styles.heroFrom}>
                <h6>Get in touch with</h6>
                <h1>Stratoz Ceramica</h1>
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

export default Contact;
