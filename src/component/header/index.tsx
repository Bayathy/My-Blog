import type { FC } from "react";
import tw from "twin.macro";
import { Icon } from "@iconify/react";
import { useDarkMode } from "../../utils/use-dark-mode";
import { useRouter } from "next/router";

const ThemeToggleButton = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <button
      css={tw`w-10 rounded-xl border-2 border-black bg-extra-light p-1 dark:border-white dark:bg-extra-dark`}
      onClick={() => toggleDarkMode(!isDarkMode)}
    >
      {isDarkMode ? (
        <Icon width={"100%"} css={tw`dark:text-white`} icon="ri:moon-line" />
      ) : (
        <Icon width={"100%"} icon="ri:sun-line" />
      )}
    </button>
  );
};

export const Header: FC = () => {
  const router = useRouter();
  return (
    <header css={tw`fixed z-10 m-auto h-16 w-full bg-inherit`}>
      <div
        css={tw`m-auto flex h-full max-w-3xl items-center justify-between px-4`}
      >
        <h1 css={tw`text-2xl dark:text-white`}>Bayathy</h1>
        <div css={tw`flex gap-2`}>
          <button
            css={tw`w-10 rounded-xl border-2 border-black bg-extra-light p-1 dark:border-white dark:bg-extra-dark`}
            onClick={() => {
              router.push("/");
            }}
          >
            <Icon
              width={"100%"}
              css={tw`dark:text-white`}
              icon="ic:round-home"
            />
          </button>
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};
