import type { FC } from "react";

import Link from "next/link";
import tw from "twin.macro";

export type ArticleCardProps = {
  title: string;
  created_at: Date;
  href?: string;
  tag: Array<string>;
};

export const ArticleCard: FC<ArticleCardProps> = ({
  title,
  created_at,
  href,
  tag,
}) => (
  <div
    css={tw`relative flex flex-col gap-2 rounded-2xl border-2 border-black bg-white p-4 shadow-md dark:border-white dark:bg-extra-dark dark:text-white dark:shadow-slate-200`}
  >
    <h1 css={tw`text-xl`}>
      {href ? <Link href={`/article/${href}`}>{title}</Link> : title}
    </h1>
    <div css={tw`flex gap-2 leading-3`}>
      {tag.map((index, key) => (
        <span
          key={key}
          css={tw`rounded-xl border-2 border-black bg-secondary-light px-4 text-sm dark:border-white dark:bg-secondary-dark`}
        >
          {index}
        </span>
      ))}
    </div>
    <div css={tw`flex items-center justify-between`}>
      <p>{`${created_at.getFullYear()}/${
        created_at.getMonth() + 1
      }/${created_at.getDate()}`}</p>
    </div>
  </div>
);
