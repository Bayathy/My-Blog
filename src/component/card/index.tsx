import type { FC } from "react";
import tw from "twin.macro";
import Link from "next/link";

export type ArticleCardProps = {
  title: string;
  created_at: string;
  description: string;
  href: string;
};

export const ArticleCard: FC<ArticleCardProps> = ({
  title,
  created_at,
  description,
  href,
}) => (
  <div
    css={tw`relative flex w-full flex-col gap-4 rounded-md bg-extra-light p-4 text-white shadow-md dark:bg-extra-dark`}
  >
    <h1 css={tw`text-2xl`}>{title}</h1>
    <p>{description}</p>
    <div css={tw`flex items-center justify-between`}>
      <p>{created_at}</p>
      <div
        css={tw`w-max rounded-xl bg-secondary-light px-4 py-2 text-black shadow-md dark:bg-secondary-dark dark:text-white`}
      >
        <Link href={href}>Read More</Link>
      </div>
    </div>
  </div>
);
