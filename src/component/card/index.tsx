import type { FC } from "react";
import tw from "twin.macro";
import Link from "next/link";

export type ArticleCardProps = {
  title: string;
  created_at: Date;
  href: string;
  tag: Array<string>;
};

export const ArticleCard: FC<ArticleCardProps> = ({
  title,
  created_at,
  href,
  tag,
}) => (
  <div
    css={tw`relative flex flex-col gap-4 rounded-md border-2 bg-white p-4 shadow-md dark:border-none dark:bg-primary-dark dark:text-gray-300`}
  >
    <h1 css={tw`text-xl`}>
      <Link href={`/article/${href}`}>{title}</Link>
    </h1>
    <div css={tw`flex gap-2 leading-3`}>
      {tag.map((index, key) => (
        <span
          key={key}
          css={tw`rounded-xl bg-secondary-light px-4 py-1 text-sm dark:bg-secondary-dark`}
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
