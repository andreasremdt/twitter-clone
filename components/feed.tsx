import { ArrowPathIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

import TweetForm from "@/components/tweet-form";
import TweetWrapper from "@/components/tweet-wrapper";
import fetchTweets from "@/lib/fetch-tweets";

import type { Tweet as TweetType } from "@/lib/types";
import { useState } from "react";

type Props = {
  tweets: TweetType[];
};

const Feed = ({ tweets: tweetsProp }: Props) => {
  const [tweets, setTweets] = useState<TweetType[]>(tweetsProp);

  const handleRefresh = async () => {
    const refreshToast = toast.loading("Refreshing...");
    const tweets = await fetchTweets();

    setTweets(tweets);

    toast.success("Feed updated!", {
      id: refreshToast,
    });
  };

  return (
    <div className="col-span-11 md:col-span-9 xl:col-span-7 border-x pt-4 max-h-screen overflow-scroll">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Home</h1>

        <button
          type="button"
          className="transition-transform duration-500 ease-out hover:rotate-180 active:scale-125"
          onClick={handleRefresh}
        >
          <ArrowPathIcon className="w-8 h-8 text-twitter" />
        </button>
      </header>

      <TweetForm setTweets={setTweets} />

      <div>
        {tweets.map((tweet) => (
          <TweetWrapper key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
