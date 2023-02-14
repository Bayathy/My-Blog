import tw from "twin.macro";

import { ArticleCard } from "../component/card";
import { getPostList } from "../utils/cms/get-post-list";

import type { NextPageWithLayout } from "./_app";
import type { GetArticleRes } from "../utils/cms/get-article";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

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
    <>
      <div css={tw`my-4 w-full border-b-2 border-black`}>
        <div
          css={tw`my-1 w-max rounded-xl border-2 border-black bg-secondary-light px-2 py-1 dark:bg-secondary-dark dark:text-white`}
        >
          <h2 css={tw`text-2xl`}>Article</h2>
        </div>
      </div>
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
    </>
  );
};

export default Home;
