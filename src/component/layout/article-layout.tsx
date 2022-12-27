import type { FC, PropsWithChildren } from "react";
import tw from "twin.macro";
import { Footer } from "../footer";
import { Header } from "../header";
import { css } from "@emotion/react";
import { Sawarabi_Gothic } from "@next/font/google";

const font = Sawarabi_Gothic({
  weight: "400",
  subsets: ["latin"],
});

export const ArticleLayout: FC<PropsWithChildren> = ({ children }) => (
  <div
    className={font.className}
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
      {children}
    </main>
    <Footer />
  </div>
);
