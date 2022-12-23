import { useEffect, useState } from "react";

import type { Dispatch, SetStateAction } from "react";

export const useDarkMode = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isDarkMode, toggleDarkMode] = useState<boolean>(() => {
    return localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? true
      : false;
  });

  useEffect(() => {
    if (isDarkMode) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
};
