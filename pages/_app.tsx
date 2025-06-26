import type { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { store } from "store/store";
import "../styles/globals.css";
import Head from "next/head";
import type { NextPageWithLayout } from "./random2398";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: NextPageWithLayout) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </>
  );
}

export default MyApp;
