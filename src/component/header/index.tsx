import type { FC } from "react";
import tw from "twin.macro";
import { Icon } from "@iconify/react";

export const Header: FC = () => (
  <header css={tw`m-auto h-16 w-full bg-primary-light`}>
    <div css={tw`m-auto flex h-full max-w-3xl items-center justify-end px-4`}>
      <button css={tw`w-10 rounded-xl border-2 border-black p-1`}>
        <Icon width={"100%"} icon="ri:sun-line" />
      </button>
    </div>
  </header>
);
