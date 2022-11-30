import { Comment } from "@/lib/types";

const fetchComments = async (tweetId: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/comments?tweetId=${tweetId}`);
  const json = await response.json();

  return json.comments as Comment[];
};

export default fetchComments;
