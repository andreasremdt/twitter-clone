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

export type CommentBody = {
  comment: string;
  tweetId: string;
  username: string;
  profileImage: string;
};

export type Comment = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "comment";
  tweet: {
    _ref: string;
    _type: "reference";
  };
} & CommentBody;
