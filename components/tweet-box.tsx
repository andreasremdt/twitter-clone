import { formatDate } from "@/lib/helpers";

import type { Tweet } from "@/lib/types";

type Props = {
  tweet: Tweet;
};

const TweetBox = ({ tweet }: Props) => (
  <article className="flex space-x-4 border-t mt-4 pt-4">
    <img src={tweet.profileImage} alt="" className="w-12 h-12 rounded-full" />

    <div>
      <div className="flex items-center space-x-1">
        <p className="font-bold">{tweet.username}</p>
        <p className="hidden text-sm text-gray-500 sm:block">@{tweet.username.replace(/\s+/g, "").toLowerCase()}</p>
        <time dateTime={tweet._createdAt} className="text-sm text-gray-500">
          - {formatDate(tweet._createdAt)}
        </time>
      </div>

      <p className="mt-1">{tweet.text}</p>

      {tweet.image && <img src={tweet.image} alt="" className="rounded-lg shadow-md mt-2" />}
    </div>
  </article>
);

export default TweetBox;
