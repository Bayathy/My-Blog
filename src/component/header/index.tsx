import type { FC } from "react";
import tw from "twin.macro";
import { Icon } from "@iconify/react";
import { useDarkMode } from "../../utils/use-dark-mode";

export const Header: FC = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <header
      css={tw`fixed z-10 m-auto h-16 w-full bg-extra-light dark:bg-black`}
    >
      <div css={tw`m-auto flex h-full max-w-3xl items-center justify-end px-4`}>
        <button
          css={tw`w-10 rounded-xl border-2 border-black p-1 dark:border-white`}
          onClick={() => toggleDarkMode(!isDarkMode)}
        >
          {isDarkMode ? (
            <Icon width={"100%"} color="white" icon="ri:moon-line" />
          ) : (
            <Icon width={"100%"} icon="ri:sun-line" />
          )}
        </button>
      </div>
    </header>
  );
};
