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
import { NextSeo } from "next-seo";
import { ArticleCard } from "../../component/card";

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
    <article css={tw`dark:text-white`}>
      <div css={tw`border-b-2 border-black pb-7`}>
        <ArticleCard
          title={data.title}
          created_at={new Date(data.createdAt)}
          tag={data.tag}
        />
      </div>
      <div
        css={[
          css`
            h1 {
              font-size: 1.8rem;
              margin: 0.8rem 0;
            }

            h2 {
              font-size: 1.5rem;
              margin: 0.5rem 0;
            }

            h3 {
              font-size: 1.3rem;
              margin: 0.3rem 0;
            }

            p {
            }

            li {
              list-style: inside;
            }

            img {
              margin: auto;
              width: 50%;
            }

            pre {
              background: black;
              color: white;
            }
          `,
        ]}
        dangerouslySetInnerHTML={{
          __html: `${data.body}`,
        }}
      />
    </article>
  </>
);

export default Article;
