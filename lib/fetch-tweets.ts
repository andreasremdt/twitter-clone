import { Tweet } from "@/lib/types";

const fetchTweets = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tweets`);
  const json = await response.json();

  return json.tweets as Tweet[];
};

export default fetchTweets;
