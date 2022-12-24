import type { FC, PropsWithChildren } from "react";
import tw from "twin.macro";
import { Footer } from "../footer";
import { Header } from "../header";
import { css } from "@emotion/react";

export const HomeLayout: FC<PropsWithChildren> = ({ children }) => (
  <div
    css={css`
      display: grid;
      grid-template-rows: auto 1fr auto;
      grid-template-columns: 100%;
      min-height: 100vh;
    `}
  >
    <Header />
    <main css={tw`m-auto max-w-3xl`}>{children}</main>
    <Footer />
  </div>
);
