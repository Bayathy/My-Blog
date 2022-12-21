import type { FC, PropsWithChildren } from "react";
import tw from "twin.macro";

export const HomeLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <main css={tw`m-auto max-w-3xl`}>{children}</main>
  </>
);
