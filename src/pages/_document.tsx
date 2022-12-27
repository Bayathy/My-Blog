import { Html, Head, Main, NextScript } from "next/document";
import tw from "twin.macro";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body css={tw`dark:bg-secondary-dark`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
