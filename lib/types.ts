export type TweetBody = {
  text: string;
  username: string;
  profileImage: string;
  image?: string;
};

export type Tweet = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "tweet";
  blockTweet: boolean;
} & TweetBody;
