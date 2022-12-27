import type { GetStaticPaths, GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";
import { getAllPaths } from "../../utils/cms/get-post-list";
import { getArticle, GetArticleRes } from "../../utils/cms/get-article";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import { ArticleLayout } from "../../component/layout/article-layout";
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
  <article>
    <div css={tw`flex flex-col gap-2 dark:text-white`}>
      <h1 css={tw`text-2xl`}>{data.title}</h1>
      <p>{data.createdAt.slice(0, -14)}</p>
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

Article.getLayout = (page: ReactElement) => (
  <ArticleLayout>{page}</ArticleLayout>
);

export default Article;
