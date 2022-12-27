import type { ReactElement } from "react";
import { HomeLayout } from "../component/layout/home-layout";
import type { NextPageWithLayout } from "./_app";
import type { GetStaticProps } from "next";
import { getAllPaths, getPostList } from "../utils/cms/get-post-list";
import { GetArticleRes } from "../utils/cms/get-article";
import { ArticleCard } from "../component/card";
import tw from "twin.macro";

type HomePageProps = {
  list: Array<GetArticleRes>;
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const list = await getPostList();
  return {
    props: {
      list,
    },
  };
};

// eslint-disable-next-line react/prop-types
const Home: NextPageWithLayout<HomePageProps> = ({ list }) => {
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
      <button
        onClick={async () =>
          await getAllPaths().then((res) => console.log(res))
        }
      >
        test
      </button>
    </div>
  );
};

Home.getLayout = (page: ReactElement) => <HomeLayout>{page}</HomeLayout>;

export default Home;
