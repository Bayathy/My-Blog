import { useEffect, useState } from "react";

import type { Dispatch, SetStateAction } from "react";

export const useDarkMode = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isDarkMode, toggleDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
};
