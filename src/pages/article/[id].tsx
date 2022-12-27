import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getAllPaths } from "../../utils/cms/get-post-list";
import { getArticle, GetArticleRes } from "../../utils/cms/get-article";

type ArticlePageProps = {
  data: GetArticleRes;
};

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
  };
};

// eslint-disable-next-line react/prop-types
const Article: NextPage<ArticlePageProps> = ({ data }) => (
  <>
    {/* eslint-disable-next-line react/prop-types */}
    <p>{data.body}</p>
  </>
);

export default Article;
