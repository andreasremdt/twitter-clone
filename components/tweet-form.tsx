import { useState } from "react";
import {
  CalculatorIcon,
  FaceSmileIcon,
  MagnifyingGlassCircleIcon,
  MapPinIcon,
  PhotoIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import TweetBoxButton from "@/components/tweet-box-button";

const TweetForm = () => {
  const [input, setInput] = useState("");

  return (
    <div className="flex space-x-4 mt-4">
      <UserIcon className="w-12 h-12 rounded-full text-gray-400 bg-gray-50 p-2" />

      <form className="flex-1">
        <textarea
          placeholder="What's happening?"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="w-full h-24 bg-gray-100 p-2 rounded-md resize-none mb-2"
        ></textarea>
        <div className="flex">
          <div className="flex space-x-2 flex-1">
            <TweetBoxButton Icon={PhotoIcon} />
            <TweetBoxButton Icon={MagnifyingGlassCircleIcon} />
            <TweetBoxButton Icon={FaceSmileIcon} />
            <TweetBoxButton Icon={CalculatorIcon} />
            <TweetBoxButton Icon={MapPinIcon} />
          </div>
          <button
            type="submit"
            disabled={input.length === 0}
            className="bg-twitter px-5 py-2 font-bold text-white rounded-full enabled:hover:bg-gray-800 enabled:focus:bg-gray-800 transition-colors duration-200 disabled:opacity-40"
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
};

export default TweetForm;
