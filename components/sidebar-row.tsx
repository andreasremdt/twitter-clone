import type { SVGProps } from "react";

type Props = {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  onClick?: () => {};
};

const SidebarRow = ({ title, Icon, onClick }: Props) => (
  <button
    type="button"
    onClick={onClick}
    className="flex items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 hover:text-twitter focus:bg-gray-100 focus:text-twitter"
  >
    <Icon className="w-6 h-6" />
    <span className="hidden md:inline font-light lg:text-xl">{title}</span>
  </button>
);

export default SidebarRow;
