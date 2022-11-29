import Head from "next/head";

import Sidebar from "@/components/sidebar";
import Feed from "@/components/feed";
import Widgets from "@/components/widgets";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter</title>
      </Head>

      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
};

export default Home;
