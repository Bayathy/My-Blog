import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import { getAllPaths } from "../../utils/cms/get-post-list";
import { getArticle, GetArticleRes } from "../../utils/cms/get-article";
import type { NextPageWithLayout } from "../_app";
import tw from "twin.macro";
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
      <div css={tw`border-b-2 border-black pb-7 dark:border-white`}>
        <ArticleCard
          title={data.title}
          created_at={new Date(data.createdAt)}
          tag={data.tag}
        />
      </div>
      <div
        css={[
          tw`[&>h1]:my-3 [&>h1]:text-3xl`,
          tw`[&>h2]:my-4 [&>h2]:border-l-8 [&>h2]:border-black [&>h2]:border-l-secondary-light [&>h2]:px-2 [&>h2]:text-2xl [&>h2]:dark:border-l-secondary-dark`,
          tw`[&>h3]:text-xl`,
          tw`[&>l1]:list-inside`,
          tw`[&>img]:m-auto`,
          tw`[&>pre]:bg-black [&>pre]:text-white`,
        ]}
        dangerouslySetInnerHTML={{
          __html: `${data.body}`,
        }}
      />
    </article>
  </>
);

export default Article;
