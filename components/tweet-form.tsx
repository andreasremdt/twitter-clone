import { useRef, useState } from "react";
import {
  CalculatorIcon,
  FaceSmileIcon,
  MagnifyingGlassCircleIcon,
  MapPinIcon,
  PhotoIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

import IconButton from "@/ui/icon-button";
import fetchTweets from "@/lib/fetch-tweets";
import TweetInput from "@/ui/tweet-input";

import type { MouseEvent, FormEvent, SetStateAction, Dispatch } from "react";
import type { Tweet, TweetBody } from "@/lib/types";

type Props = {
  setTweets: Dispatch<SetStateAction<Tweet[]>>;
};

const TweetForm = ({ setTweets }: Props) => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const imageInputRef = useRef<HTMLInputElement>(null);
  const session = useSession();
  const [imageDialogOpen, setImageDialogOpen] = useState(false);

  const addImageToTweet = (event: MouseEvent<HTMLButtonElement>) => {
    if (!imageInputRef.current?.value) {
      return;
    }

    setImage(imageInputRef.current.value);
    imageInputRef.current.value = "";
    setImageDialogOpen(false);
  };

  const postTweet = async () => {
    const tweetInfo: TweetBody = {
      text: input,
      username: session.data?.user?.name as string,
      profileImage:
        "https://media.graphassets.com/resize=fit:clip,height:350,width:350/output=format:webp/c2CgPhdASKmzsywpZct5",
      image: image,
    };

    const result = await fetch("/api/tweets", {
      body: JSON.stringify(tweetInfo),
      method: "POST",
    });

    const json = await result.json();
    const newTweets = await fetchTweets();
    setTweets(newTweets);

    toast.success("Tweet posted");

    return json;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    postTweet();

    setInput("");
    setImage("");
    setImageDialogOpen(false);
  };

  if (!session.data) {
    return null;
  }

  return (
    <div className="flex space-x-4 mt-2 px-8 border-b-4 border-slate-200">
      <UserIcon className="w-12 h-12 rounded-full text-gray-400 bg-gray-50 p-2" />

      <form className="flex-1 mb-2" onSubmit={handleSubmit}>
        <TweetInput
          value={input}
          onChange={(event) => setInput(event.target.value)}
          Controls={
            <>
              <div className="flex gap-x-1 mr-auto">
                <IconButton onClick={() => setImageDialogOpen(!imageDialogOpen)} Icon={PhotoIcon} variant="ghost" />
                <IconButton Icon={MagnifyingGlassCircleIcon} variant="ghost" />
                <IconButton Icon={FaceSmileIcon} variant="ghost" />
                <IconButton Icon={CalculatorIcon} variant="ghost" />
                <IconButton Icon={MapPinIcon} variant="ghost" />
              </div>
              <button
                type="submit"
                disabled={input.length === 0}
                className="bg-twitter px-5 py-2 font-bold text-white rounded-full enabled:hover:bg-gray-800 enabled:focus:bg-gray-800 transition-colors duration-200 disabled:opacity-40"
              >
                Tweet
              </button>
            </>
          }
        />

        {imageDialogOpen && (
          <div className="mt-5 flex rounded-lg bg-twitter/80 py-2 px-4">
            <input
              type="text"
              placeholder="Enter Image URL..."
              ref={imageInputRef}
              className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white"
            />
            <button type="button" className="font-bold text-white" onClick={addImageToTweet}>
              Add image
            </button>
          </div>
        )}

        {image && <img src={image} className="mt-10 h-40 w-full rounded-xl object-contain shadow-lg" alt="" />}
      </form>
    </div>
  );
};

export default TweetForm;
