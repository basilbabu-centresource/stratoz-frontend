import "../../styles/globals.scss";
import "../../styles/custom.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider, useDispatch } from "react-redux";
import { store } from "../store";
import { useEffect } from "react";
import { validateToken } from "../features/auth/authSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../api";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const queryClient = new QueryClient();

const getTokenFromLocalStorage = async () => {
  const token = await localStorage.getItem("token");
  return token;
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    getTokenFromLocalStorage().then((token) => {
      if (!token) {
        // Remove default headers from axios
        api.defaults.headers.common["Authorization"] = ``;
        return;
      }

      store.dispatch(validateToken(token));
    });
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></script>

      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ToastContainer
            // position="top-center"
            autoClose={5000}
            hideProgressBar={true}
            style={{ marginTop: "6rem" }}
          />
          <Component {...pageProps} />;
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default MyApp;
