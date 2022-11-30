import { useEffect, useState } from "react";
import { ArrowsRightLeftIcon, ArrowUpTrayIcon, ChatBubbleLeftRightIcon, HeartIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

import { formatDate } from "@/lib/helpers";
import fetchComments from "@/lib/fetch-comments";
import TweetBoxButton from "@/components/tweet-box-button";

import type { FormEvent } from "react";
import type { Comment, CommentBody, Tweet } from "@/lib/types";

type Props = {
  tweet: Tweet;
};

const TweetBox = ({ tweet }: Props) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentBoxVisible, setCommentBoxVisible] = useState(false);
  const [input, setInput] = useState("");
  const session = useSession();

  const refreshComments = async () => {
    const comments: Comment[] = await fetchComments(tweet._id);
    setComments(comments);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const commentBody: CommentBody = {
      comment: input,
      username: session.data?.user?.name as string,
      tweetId: tweet._id,
      profileImage:
        "https://media.graphassets.com/resize=fit:clip,height:350,width:350/output=format:webp/c2CgPhdASKmzsywpZct5",
    };

    const result = await fetch("/api/comments", {
      body: JSON.stringify(commentBody),
      method: "POST",
    });

    const json = await result.json();
    const newComments = await fetchComments(tweet._id);
    setComments(newComments);

    toast.success("Comment posted");

    setCommentBoxVisible(false);
    setInput("");

    return json;
  };

  useEffect(() => {
    refreshComments();
  }, []);

  return (
    <article className="border-t mt-4 pt-4">
      <div className="flex space-x-4">
        <img src={tweet.profileImage} alt="" className="w-12 h-12 rounded-full" />

        <div>
          <div className="flex items-center space-x-1">
            <p className="font-bold">{tweet.username}</p>
            <p className="hidden text-sm text-gray-500 sm:block">@{tweet.username.replace(/\s+/g, "").toLowerCase()}</p>
            <time dateTime={tweet._createdAt} className="text-sm text-gray-500">
              - {formatDate(tweet._createdAt)}
            </time>
          </div>

          <p className="mt-1">{tweet.text}</p>

          {tweet.image && <img src={tweet.image} alt="" className="rounded-lg shadow-md mt-2" />}

          {session.data && (
            <div className="flex justify-between mt-4">
              <TweetBoxButton
                Icon={ChatBubbleLeftRightIcon}
                text={comments.length}
                onClick={() => setCommentBoxVisible(!commentBoxVisible)}
              />
              <TweetBoxButton Icon={ArrowsRightLeftIcon} />
              <TweetBoxButton Icon={HeartIcon} />
              <TweetBoxButton Icon={ArrowUpTrayIcon} />
            </div>
          )}
        </div>
      </div>

      {commentBoxVisible && (
        <form className="mt-3 flex space-x-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Write a comment..."
            className="flex-1 rounded-lg bg-gray-100 p-2"
            onChange={(event) => setInput(event.target.value)}
            value={input}
          />
          <button disabled={input.length === 0} type="submit" className="text-twitter disabled:text-gray-200 font-bold">
            Post
          </button>
        </form>
      )}

      {comments.length > 0 && (
        <div className="my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5">
          {comments.map((comment) => (
            <div key={comment._id} className="relative flex space-x-2">
              <hr className="absolute left-5 top-10 h-8 border-x" />
              <img src={comment.profileImage} alt="" className="w-7 h-7 rounded-full mt-2" />
              <div>
                <div className="flex items-center space-x-1">
                  <p className="font-bold">{comment.username}</p>
                  <p className="hidden text-sm text-gray-500 sm:block">
                    @{comment.username.replace(/\s+/g, "").toLowerCase()}
                  </p>
                  <time dateTime={comment._createdAt} className="text-sm text-gray-500">
                    - {formatDate(comment._createdAt)}
                  </time>
                </div>
                <p>{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
};

export default TweetBox;
