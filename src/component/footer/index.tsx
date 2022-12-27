import { Icon } from "@iconify/react";
import Link from "next/link";
import type { FC } from "react";
import tw from "twin.macro";

export const Footer: FC = () => (
  <footer css={tw`h-16 bg-extra-light dark:bg-black`}>
    <div
      css={tw`m-auto flex h-full max-w-3xl items-center justify-center gap-4 text-3xl dark:text-white`}
    >
      <Link href={"https://github.com/Bayathy"}>
        <Icon icon="mdi:github" />
      </Link>
      <Link href={"https://twitter.com/Kobath_dev"}>
        <Icon icon="mdi:twitter" />
      </Link>
    </div>
  </footer>
);
