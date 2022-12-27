import type { FC, PropsWithChildren } from "react";
import tw from "twin.macro";
import { Footer } from "../footer";
import { Header } from "../header";
import { css } from "@emotion/react";

export const ArticleLayout: FC<PropsWithChildren> = ({ children }) => (
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
      {children}
    </main>
    <Footer />
  </div>
);
