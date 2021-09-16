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
  const dispatch = useDispatch();

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
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LayoutDefault>
        <div className={styles.bghero}>
          <div className="container">
            <div className="row">
              <div className="col-6">
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
                          <label>Mobile</label>
                          <input
                            type="password"
                            placeholder="****************"
                            {...register("password", { required: true })}
                          />
                          <div className={styles.chkBox}>
                            <input type="checkbox" />
                            <label> Keep me signed in</label>
                          </div>
                        </div>
                      </div>
                      <div className={styles.row}>
                        <div className={styles.col12}>
                          <input type="submit" value="Sign In" />
                        </div>
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
              <div className="col-6">
                <div className={styles.titleBox}>
                  <h6>Welcome to</h6>
                  <h1>Stratos Ceramica</h1>
                  <h5>Luxury Redefined</h5>
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
