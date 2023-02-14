import type { FC } from "react";

import { Global } from "@emotion/react";
import tw, { css, GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css([
  {
    body: {
      ...tw`bg-primary-light antialiased dark:bg-primary-dark`,
    },
  },
]);

const GlobalStyles: FC = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
