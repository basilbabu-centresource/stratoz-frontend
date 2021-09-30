import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../layout/Default";
import styles from "../../../styles/ResetPassword.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import api from "../../api";
import { toast } from "react-toastify";

type Inputs = {
  email: string;
};

const ForgotPassword: NextPage = () => {
  const [isLoading, setisLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setisLoading(true);

    api
      .post("/auth/forgot-password", data)
      .then(() => {
        toast.success("Password reset request successfull.");
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
          <div className={styles.bgContainer}>
            <div className="container">
              <div className={styles.bgheroFrom}>
                <div className={styles.heroFrom}>
                  <h4>Forgot Password</h4>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-md-8">
                        <label>
                          Enter your registered email to reset your password
                        </label>
                      </div>
                      <div className="col-md-12">
                        <input
                          type="email"
                          placeholder="john@doe.com"
                          {...register("email", { required: true })}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <input type="submit" value="Submit" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutDefault>
    </>
  );
};

export default ForgotPassword;
