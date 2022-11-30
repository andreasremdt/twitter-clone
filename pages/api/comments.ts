import { groq } from "next-sanity";

import sanity from "@/lib/sanity-client";

import type { NextApiRequest, NextApiResponse } from "next";
import type { Comment, CommentBody } from "@/lib/types";

type Data = {
  comments?: Comment[];
  comment?: Comment;
};

const commentQuery = groq`*[_type == "comment" && references(*[_type == "tweet" && _id == $tweetId]._id)] | order(_createdAt desc)`;

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const data: CommentBody = JSON.parse(req.body);

    const comment: Comment = await sanity.create({
      _type: "comment",
      comment: data.comment,
      username: data.username,
      profileImage: data.profileImage,
      tweet: {
        _type: "reference",
        _ref: data.tweetId,
      },
    });

    res.status(200).json({ comment });
  } else if (req.method === "GET") {
    const { tweetId } = req.query;
    const comments: Comment[] = await sanity.fetch(commentQuery, {
      tweetId,
    });
    res.status(200).json({ comments });
  } else {
    res.status(405).end();
  }
};

export default handler;
