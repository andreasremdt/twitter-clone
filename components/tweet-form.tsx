import { useState } from "react";
import {
  CalculatorIcon,
  FaceSmileIcon,
  MagnifyingGlassCircleIcon,
  MapPinIcon,
  PhotoIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";

import TweetFormButton from "@/components/tweet-form-button";

const TweetForm = () => {
  const [input, setInput] = useState("");
  const session = useSession();

  if (!session.data) {
    return null;
  }

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
            <TweetFormButton Icon={PhotoIcon} />
            <TweetFormButton Icon={MagnifyingGlassCircleIcon} />
            <TweetFormButton Icon={FaceSmileIcon} />
            <TweetFormButton Icon={CalculatorIcon} />
            <TweetFormButton Icon={MapPinIcon} />
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
