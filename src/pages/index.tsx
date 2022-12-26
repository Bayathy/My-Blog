import type { ReactElement } from "react";
import { HomeLayout } from "../component/layout/home-layout";
import type { NextPageWithLayout } from "./_app";
import type { GetStaticProps } from "next";
import { getPostList } from "../utils/cms/get-post-list";
import { GetArticleRes } from "../utils/cms/get-article";
import { ArticleCard } from "../component/card";
import tw from "twin.macro";

type HomeProps = {
  list: Array<GetArticleRes>;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const list = await getPostList();
  return {
    props: {
      list,
    },
  };
};

// eslint-disable-next-line react/prop-types
const Home: NextPageWithLayout<HomeProps> = ({ list }) => {
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

Home.getLayout = (page: ReactElement) => <HomeLayout>{page}</HomeLayout>;

export default Home;
