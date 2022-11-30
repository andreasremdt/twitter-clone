import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import toast from "react-hot-toast";

import TweetForm from "@/components/tweet-form";
import TweetWrapper from "@/components/tweet-wrapper";
import fetchTweets from "@/lib/fetch-tweets";
import PageHeader from "@/ui/page-header";
import IconButton from "@/ui/icon-button";

import type { Tweet as TweetType } from "@/lib/types";

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
    <div className="col-span-11 md:col-span-9 xl:col-span-7 border-x">
      <PageHeader
        title="Home"
        Control={<IconButton Icon={ArrowPathIcon} title="Refresh Feed" onClick={handleRefresh} />}
      />

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
