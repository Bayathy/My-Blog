import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "../styles/global-styles";
import { css } from "@emotion/react";
import { Header } from "../component/header";
import tw from "twin.macro";
import { Footer } from "../component/footer";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <Head>
        <title>Bayathy BLog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyles />
      <DefaultSeo {...SEO} />
      <div
        css={css`
          display: grid;
          grid-template-rows: 1fr auto;
          grid-template-columns: 100%;
          min-height: 100vh;
          width: 100%;
        `}
      >
        <Header />
        <main css={tw`m-auto my-24 w-full max-w-3xl px-6  md:px-16`}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
