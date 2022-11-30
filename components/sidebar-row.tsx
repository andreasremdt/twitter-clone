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
    className="flex items-center space-x-4 hover:bg-slate-200 transition-colors focus-visible:bg-slate-200 mb-2 px-4 py-3 rounded-full outline-none font-bold lg:text-xl"
  >
    <Icon className="w-6 h-6" strokeWidth={2} />
    <span className="hidden md:inline">{title}</span>
  </button>
);

export default SidebarRow;
