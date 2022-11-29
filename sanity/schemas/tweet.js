export default {
  name: "tweet",
  title: "Tweet",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Tweet Content",
      type: "string",
    },
    {
      name: "blockTweet",
      title: "Block Tweet",
      description: "Toggle if tweet is deemed inappropriate",
      type: "boolean",
    },
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "profileImage",
      title: "Profile Image",
      type: "string",
    },
    {
      name: "image",
      title: "Tweet image",
      type: "string",
    },
  ],
};
