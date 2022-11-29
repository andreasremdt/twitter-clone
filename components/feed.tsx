import { ArrowPathIcon } from "@heroicons/react/24/outline";

const Feed = () => (
  <div>
    <header className="flex items-center justify-between">
      <h1 className="text-xl font-bold">Home</h1>

      <button type="button" className="transition-transform duration-500 ease-out hover:rotate-180 active:scale-125">
        <ArrowPathIcon className="w-8 h-8 text-twitter" />
      </button>
    </header>
  </div>
);

export default Feed;
