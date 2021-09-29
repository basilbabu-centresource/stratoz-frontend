import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import LayoutDefault from "../../layout/Default";
import styles from "../../../styles/Login.module.scss";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../features/auth/authSlice";
import router from "next/router";

type Inputs = {
  email: string;
  password: string;
};

const Login: NextPage = () => {
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
      identifier: data.email,
      password: data.password,
    };

    dispatch(login(credentials));

    // dispatch(login(credentials)).then((response: any) => {
    //   console.log(response.status);
    //   if(response.status == 400){
    //     alert("Invalid username and password");
    //   }
    // });

  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LayoutDefault>
        <div className={styles.bghero}>
          <div className={styles.bgContainer}>
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-12 d-md-none">
                  <div className={"mb-4 " + styles.titleBox}>
                    <h6>Welcome to</h6>
                    <h1>Stratoz Ceramica</h1>
                    <h5>Luxury Redefined</h5>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className={styles.bgheroFrom}>
                    <div className={styles.heroFrom}>
                      <h4>Login in to your account</h4>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.row}>
                          <div className={styles.col12}>
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
                            </span>
                          </div>
                            
                          <div className={styles.col12}>
                            <label>Password</label>
                            <input
                              type="password"
                              placeholder="****************"
                              {...register("password", { required: true })}
                            />
                            <span className="error">
                              {errors.password && errors.password.type === "required" && (
                                <span>Password is required</span>
                              )}
                            </span>
                          </div>
                          <div className={styles.col12}>
                            <div className={styles.chkBox}>
                              <label className={styles.checkboxButton}>
                                <input
                                  type="checkbox"
                                  className={styles.checkboxButtonInput}
                                  name="choice1"
                                />
                                <span
                                  className={styles.checkboxButtonControl}
                                ></span>
                                <span className={styles.checkboxButtonLabel}>
                                  {" "}
                                  Keep me signed in
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.col12}>
                            <input type="submit" value="Sign In" />
                          </div>
                          <div id="invalid"></div>
                          <div className={styles.col12}>
                            <p>
                              Not Registered?{" "}
                              <Link href="/register">
                                <a className="text-white">Register Now</a>
                              </Link>
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 d-none d-md-flex">
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

export default Login;
