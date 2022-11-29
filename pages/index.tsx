import Head from "next/head";

import Sidebar from "@/components/sidebar";
import Feed from "@/components/feed";
import Widgets from "@/components/widgets";

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
        <Widgets />
      </main>
    </div>
  );
};

export default Home;
