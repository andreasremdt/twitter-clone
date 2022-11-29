import type { SVGProps } from "react";

type Props = {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
};

const SidebarRow = ({ title, Icon }: Props) => (
  <button
    type="button"
    className="flex items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 hover:text-twitter focus:bg-gray-100 focus:text-twitter"
  >
    <Icon className="w-6 h-6" />
    <span>{title}</span>
  </button>
);

export default SidebarRow;
