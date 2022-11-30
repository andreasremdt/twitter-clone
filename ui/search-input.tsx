import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"input">;

const SearchInput = (props: Props) => (
  <div className="relative">
    <input
      type="search"
      {...props}
      placeholder="Search Twitter"
      className="rounded-full bg-slate-200 flex-1 outline-none h-12 pl-12 pr-4 w-full placeholder:text-slate-500 text-slate-500 focus-visible:bg-white border border-slate-200 focus-visible:border-twitter transition-colors"
    />
    <MagnifyingGlassIcon
      className="w-5 h-5 text-slate-500 absolute top-[14px] left-4"
      aria-hidden="true"
      data-testid="icon"
    />
  </div>
);

export default SearchInput;
