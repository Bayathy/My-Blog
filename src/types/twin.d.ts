import "twin.macro";
import { css as cssImport } from "@emotion/react";
import styledImport from "@emotion/styled";
// eslint-disable-next-line import/named
import { CSSInterpolation } from "@emotion/serialize";
import { TwComponentMap, TwFn } from "twin.macro";
declare module "twin.macro" {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module "react" {
  // The tw and css prop
  interface DOMAttributes<T> {
    tw?: string;
    css?: CSSInterpolation;
  }
}
