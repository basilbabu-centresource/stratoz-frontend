import "../../styles/globals.scss";
import "../../styles/custom.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider, useDispatch } from "react-redux";
import { store } from "../store";
import { useEffect } from "react";
import { validateToken } from "../features/auth/authSlice";

const queryClient = new QueryClient();

const getTokenFromLocalStorage = async () => {
  const token = await localStorage.getItem("token");
  return token;
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    getTokenFromLocalStorage().then((token) => {
      console.log("token", token);
      if (!token) return;

      store.dispatch(validateToken(token));
    });

    // Check token in local storage
    // IF token exits validate the token
    // else return
  }, []);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />;
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
