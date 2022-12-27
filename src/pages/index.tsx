import type { NextPageWithLayout } from "./_app";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { getPostList } from "../utils/cms/get-post-list";
import { GetArticleRes } from "../utils/cms/get-article";
import { ArticleCard } from "../component/card";
import tw from "twin.macro";

type HomePageProps = {
  list: Array<GetArticleRes>;
};

type StaticHomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const list = await getPostList();
  return {
    props: {
      list,
    },
    revalidate: 1000,
  };
};

// eslint-disable-next-line react/prop-types
const Home: NextPageWithLayout<StaticHomePageProps> = ({ list }) => {
  return (
    <div css={tw`flex w-full flex-col gap-4`}>
      {/* eslint-disable-next-line react/prop-types */}
      {list.map(({ title, tag, createdAt, id }) => (
        <ArticleCard
          key={id}
          title={title}
          created_at={new Date(createdAt)}
          href={id}
          tag={tag}
        />
      ))}
    </div>
  );
};

export default Home;
