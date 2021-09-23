import styles from "../../../styles/Register.module.scss";
import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import LayoutDefault from "../../layout/Default";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, selectUser } from "../../features/auth/authSlice";
import router from "next/router";

type Inputs = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirm: string;
};

const Register: NextPage = () => {
  const dispatch = useDispatch<any>();

  const { token, user } = useSelector(selectUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Data from forms", data);

    const credentials = {
      name: data.name,
      username: data.email,
      email: data.email,
      password: data.password,
      confirm_password: data.passwordConfirm,
    };

    dispatch(registerUser(credentials));
  };

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <LayoutDefault>
        <div className={styles.bghero}>
          <div className={styles.bgContainer}>
            <div className="container">
              <div className="row">
                <div className="col-12 d-md-none">
                  <div className={"mb-4 " + styles.titleBox}>
                    <h6>Welcome to</h6>
                    <h1>Stratoz Ceramica</h1>
                    <h5>Luxury Redefined</h5>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styles.bgheroFrom}>
                    <div className={styles.heroFrom}>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <h4>Create your account</h4>
                        <div className={styles.row}>
                          <div className={styles.col12}>
                            <label>Name</label>
                            <input
                              type="text"
                              placeholder="Jonathan Doe"
                              {...register("name", { required: true })}
                            />
                            <label>Email</label>
                            <input
                              type="email"
                              placeholder="jonathandoe@gamil.com"
                              {...register("email", { required: true })}
                            />
                            <label>Mobile</label>
                            <input
                              type="text"
                              placeholder="+976 256474473"
                              {...register("phoneNumber", { required: true })}
                            />
                          </div>
                        </div>
                        <div className={styles.row +" "+ styles.psw}>
                          <div className={styles.col6}>
                            <label>Password</label>
                            <input
                              type="password"
                              placeholder="****************"
                              {...register("password", { required: true })}
                            />
                          </div>
                          <div className={styles.col6}>
                            <label>Repeat Password</label>
                            <input
                              type="password"
                              placeholder="****************"
                              {...register("passwordConfirm", { required: true })}
                            />
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.col12}>
                            <input type="submit" value="Sign Up" />
                          </div>
                          <div className={styles.col12}>
                            <p>
                              <Link href="/login">
                                <a className="text-white">Sign in instead</a>
                              </Link>
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-none d-md-flex">
                  <div className={styles.titleBox}>
                    <h6>Welcome to</h6>
                    <h1>Stratoz Ceramica</h1>
                    <h5>Luxury Redefined</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutDefault>
    </>
  );
};

export default Register;
