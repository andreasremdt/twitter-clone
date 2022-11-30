import Head from "next/head";

import Navigation from "@/components/navigation";
import Feed from "@/components/feed";
import Widgets from "@/components/widgets";
import fetchTweets from "@/lib/fetch-tweets";

import type { GetServerSideProps, NextPage } from "next";
import type { Tweet } from "@/lib/types";

type Props = {
  tweets: Tweet[];
};

const Home: NextPage<Props> = ({ tweets }) => (
  <>
    <Head>
      <title>Twitter</title>
    </Head>

    <Navigation />
    <Feed tweets={tweets} />
    <Widgets />
  </>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();

  return {
    props: {
      tweets,
    },
  };
};

export default Home;
