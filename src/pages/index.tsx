import { ReactElement } from "react";
import tw from "twin.macro";
import { HomeLayout } from "../component/layout/home-layout";
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <p css={tw`text-3xl`}>Hello!</p>
    </>
  );
};

Home.getLayout = (page: ReactElement) => <HomeLayout>{page}</HomeLayout>;

export default Home;
