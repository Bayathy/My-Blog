import type { ReactElement, ReactNode } from "react";

import { css } from "@emotion/react";
import localfont from "@next/font/local";
import Head from "next/head";
// eslint-disable-next-line import/order
import { DefaultSeo } from "next-seo";
import tw from "twin.macro";

import SEO from "../../next-seo.config";
import { Footer } from "../component/footer";
import { Header } from "../component/header";
import GlobalStyles from "../styles/global-styles";

import type { NextPage } from "next";
import type { AppProps } from "next/app";

const font = localfont({ src: "./subset-noto.woff2", display: "swap" });

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
        <main
          className={font.className}
          css={tw`m-auto my-24 w-full max-w-3xl px-6`}
        >
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
