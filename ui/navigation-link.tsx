import Link from "next/link";

import type { LinkProps } from "next/link";
import type { SVGProps, ReactNode } from "react";

type Props = {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  children: ReactNode;
} & LinkProps;

const NavigationLink = ({ children, Icon, ...props }: Props) => (
  <Link
    {...props}
    className="flex items-center space-x-4 hover:bg-slate-200 transition-colors focus-visible:bg-slate-200 mb-2 px-4 py-3 rounded-full outline-none font-bold lg:text-xl"
  >
    <Icon className="w-6 h-6" strokeWidth={2} />
    <span className="hidden md:inline">{children}</span>
  </Link>
);

export default NavigationLink;
