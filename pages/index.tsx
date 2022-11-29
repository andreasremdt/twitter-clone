import Head from "next/head";

import Sidebar from "@/components/sidebar";
import Feed from "@/components/feed";
import Widgets from "@/components/widgets";
import fetchTweets from "@/lib/fetch-tweets";

import type { GetServerSideProps, NextPage } from "next";
import type { Tweet } from "@/lib/types";

type Props = {
  tweets: Tweet[];
};

const Home: NextPage<Props> = ({ tweets }) => (
  <div className="max-w-6xl mx-auto max-h-screen overflow-hidden">
    <Head>
      <title>Twitter</title>
    </Head>

    <main className="grid grid-cols-9">
      <Sidebar />
      <Feed tweets={tweets} />
      <Widgets />
    </main>
  </div>
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
