import { Suspense } from "react";

import { NextSeo } from "next-seo";
import tw, { css } from "twin.macro";

import { ArticleCard } from "../../component/card";
import { getArticle } from "../../utils/cms/get-article";
import { getAllPaths } from "../../utils/cms/get-post-list";

import type { GetArticleRes } from "../../utils/cms/get-article";
import type { NextPageWithLayout } from "../_app";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";

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
  <>
    <NextSeo
      openGraph={{
        url: `https://blog.bayathy.com/artcle/${data.id}`,
        description: data.title,
        title: data.title,
        images: [
          {
            url: `https://blog.bayathy.com/api/og?title=${data.title}`,
            alt: data.title,
          },
        ],
      }}
    />
    <Suspense fallback={<p>isLoading</p>}>
      <article css={tw`dark:text-white`}>
        <ArticleCard
          title={data.title}
          created_at={new Date(data.createdAt)}
          tag={data.tag}
        />
        <div
          css={[
            css`
              img {
                margin: auto;
                width: 50%;
              }
            `,
            tw`[&>h1]:my-3 [&>h1]:text-3xl`,
            tw`[&>h2]:my-4 [&>h2]:border-l-8 [&>h2]:border-black [&>h2]:border-l-secondary-light [&>h2]:px-2 [&>h2]:text-2xl [&>h2]:dark:border-l-secondary-dark`,
            tw`[&>h3]:my-2 [&>h3]:border-b-2 [&>h3]:border-black [&>h3]:text-xl [&>h3]:dark:border-white`,
            tw`[&>l1]:list-inside`,
            tw`[&>pre]:bg-black [&>pre]:text-white`,
          ]}
          dangerouslySetInnerHTML={{
            __html: `${data.body}`,
          }}
        />
      </article>
    </Suspense>
  </>
);

export default Article;
