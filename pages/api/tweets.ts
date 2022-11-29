import { groq } from "next-sanity";

import sanity from "@/lib/sanity-client";

import type { NextApiRequest, NextApiResponse } from "next";
import type { Tweet } from "@/lib/types";

type Data = {
  tweets: Tweet[];
};

const feedQuery = groq`*[_type == "tweet" && !blockTweet] | order(_createdAt desc)`;

const handler = async (_: NextApiRequest, res: NextApiResponse<Data>) => {
  const tweets: Tweet[] = await sanity.fetch(feedQuery);

  res.status(200).json({ tweets });
};

export default handler;
