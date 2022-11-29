import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchForm = () => (
  <form className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full mb-4">
    <MagnifyingGlassIcon className="w-5 h-5 flex-shrink-0 text-gray-500" />
    <input type="search" placeholder="Search Twitter..." className="bg-transparent flex-1 outline-none" />
  </form>
);

export default SearchForm;
