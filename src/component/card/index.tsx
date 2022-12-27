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
    css={tw`relative flex flex-col gap-4 rounded-md bg-extra-light p-4 text-white shadow-md dark:bg-extra-dark`}
  >
    <h1 css={tw`text-xl`}>{title}</h1>
    <div css={tw`flex gap-2 leading-3`}>
      {tag.map((index, key) => (
        <span
          key={key}
          css={tw`rounded-xl bg-secondary-dark px-4 py-1 text-sm text-white`}
        >
          {index}
        </span>
      ))}
    </div>
    <div css={tw`flex items-center justify-between`}>
      <p>{`${created_at.getFullYear()}/${
        created_at.getMonth() + 1
      }/${created_at.getDate()}`}</p>
      <div
        css={tw`w-max rounded-xl bg-secondary-dark px-4 py-2 text-white shadow-md dark:bg-secondary-dark dark:text-white`}
      >
        <Link href={`/article/${href}`}>Read More</Link>
      </div>
    </div>
  </div>
);
