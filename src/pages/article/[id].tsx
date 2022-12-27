import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import { getAllPaths } from "../../utils/cms/get-post-list";
import { getArticle, GetArticleRes } from "../../utils/cms/get-article";
import type { NextPageWithLayout } from "../_app";
import tw from "twin.macro";
import { css } from "@emotion/react";

type ArticlePageProps = {
  data: GetArticleRes;
};

type StaticArticlePageProps = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths: GetStaticPaths = async () => {
  const getPaths = await getAllPaths();
  const paths = getPaths.map((post) => ({
    params: { id: post },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticlePageProps> = async ({
  params,
}) => {
  const data = await getArticle(params?.id as string);
  return {
    props: {
      data,
    },
    revalidate: 1000,
  };
};

const Article: NextPageWithLayout<StaticArticlePageProps> = ({ data }) => (
  <article css={tw`prose-sm`}>
    <div
      css={tw`flex flex-col gap-4 border-b-2 border-black dark:border-white dark:text-white`}
    >
      <p css={tw`text-xl leading-none`}>{data.createdAt.slice(0, -14)}</p>
      <h1 css={tw`m-0 leading-none`}>{data.title}</h1>
      <div
        css={tw`mb-2 w-max rounded-lg bg-secondary-light p-2 leading-none dark:bg-extra-dark`}
      >
        <p css={tw`m-0`}>{data.tag}</p>
      </div>
    </div>
    <div
      css={[
        css`
          margin-top: 2rem;
        `,
        tw`dark:text-white`,
      ]}
      dangerouslySetInnerHTML={{
        __html: `${data.body}`,
      }}
    />
  </article>
);

export default Article;
