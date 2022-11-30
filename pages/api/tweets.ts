import sanity from "@/lib/sanity-client";

import type { NextApiRequest, NextApiResponse } from "next";
import type { Tweet, TweetBody } from "@/lib/types";

type Data = {
  tweets?: Tweet[];
  tweet?: Tweet;
};

const feedQuery = '*[_type == "tweet" && !blockTweet] | order(_createdAt desc)';

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const data: TweetBody = JSON.parse(req.body);
    const tweet: Tweet = await sanity.writable.create({
      _type: "tweet",
      text: data.text,
      username: data.username,
      blockTweet: false,
      profileImage: data.profileImage,
      image: data.image,
    });

    res.status(200).json({ tweet });
  } else if (req.method === "GET") {
    const tweets: Tweet[] = await sanity.readonly.fetch(feedQuery);

    res.status(200).json({ tweets });
  } else {
    res.status(405).end();
  }
};

export default handler;
