import { groq } from "next-sanity";

import sanity from "@/lib/sanity-client";

import type { NextApiRequest, NextApiResponse } from "next";
import type { Comment } from "@/lib/types";

type Data = {
  comments: Comment[];
};

const commentQuery = groq`*[_type == "comment" && references(*[_type == "tweet" && _id == $tweetId]._id)] | order(_createdAt desc)`;

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { tweetId } = req.query;
  const comments: Comment[] = await sanity.fetch(commentQuery, {
    tweetId,
  });
  res.status(200).json({ comments });
};

export default handler;
