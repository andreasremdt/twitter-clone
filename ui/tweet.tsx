import Image from "next/image";
import Link from "next/link";

import { formatDate } from "@/lib/helpers";

import type { Tweet as TweetType } from "@/lib/types";
import type { ReactNode } from "react";

type Props = {
  tweet: TweetType;
  Controls?: ReactNode;
};

const Tweet = ({ tweet, Controls }: Props) => (
  <article className="border-b border-slate-200 flex gap-x-4 pb-2 pt-4 px-8 hover:bg-twitter/5 transition-colors cursor-pointer">
    <Image
      width={48}
      height={48}
      src={tweet.profileImage}
      alt={`Profile picture of ${tweet.username}`}
      className="w-12 h-12 rounded-full"
    />

    <div className="flex-1">
      <p>
        <Link
          href={`/users/${tweet.username}`}
          className="font-bold hover:underline focus-visible:underline outline-none mr-2"
        >
          {tweet.username}
        </Link>{" "}
        <span className="text-slate-500">@{tweet.username.replace(/\s+/g, "").toLowerCase()}</span>
        <span className="text-slate-500 mx-1">•</span>
        <time dateTime={tweet._createdAt} className="text-slate-500">
          {formatDate(tweet._createdAt)}
        </time>
      </p>

      <p className="my-2">{tweet.text}</p>

      {tweet.image && (
        <div className="relative h-96 w-full">
          <Image src={tweet.image} alt="" fill className="rounded-lg object-cover" data-testid="tweet-image" />
        </div>
      )}

      {Controls}
    </div>
  </article>
);

export default Tweet;
