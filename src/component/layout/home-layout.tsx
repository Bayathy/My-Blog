import type { FC, PropsWithChildren } from "react";
import tw from "twin.macro";
import { Header } from "../header";

export const HomeLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main css={tw`m-auto max-w-3xl`}>{children}</main>
  </>
);
