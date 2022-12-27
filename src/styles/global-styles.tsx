import type { FC } from "react";
import { Global } from "@emotion/react";
import tw, { css, GlobalStyles as BaseStyles, theme } from "twin.macro";

const customStyles = css([
  {
    body: {
      WebkitTapHighlightColor: theme`colors.purple.500`,
      ...tw`antialiased dark:bg-primary-dark`,
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
