import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Widgets = () => (
  <aside>
    <form className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full">
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
      <input type="search" placeholder="Search Twitter..." className="bg-transparent flex-1 outline-none" />
    </form>

    <TwitterTimelineEmbed sourceType="profile" screenName="elonmusk" options={{ height: 1000 }} />
  </aside>
);

export default Widgets;
