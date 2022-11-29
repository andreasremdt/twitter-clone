import Head from "next/head";

import Sidebar from "@/components/sidebar";
import Feed from "@/components/feed";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter</title>
      </Head>

      <main>
        <Sidebar />
        <Feed />
      </main>
    </div>
  );
};

export default Home;
