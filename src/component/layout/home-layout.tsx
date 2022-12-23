import type { FC, PropsWithChildren } from "react";
import tw from "twin.macro";
import { Footer } from "../footer";
import { Header } from "../header";

export const HomeLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main css={tw`m-auto min-h-[90vh] max-w-3xl`}>{children}</main>
    <Footer />
  </>
);

