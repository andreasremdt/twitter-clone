import cx from "classnames";

import type { SVGProps, ComponentPropsWithoutRef } from "react";

type Props = {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  variant?: "primary" | "success" | "danger" | "ghost";
} & ComponentPropsWithoutRef<"button">;

const IconButton = ({ Icon, children, className, variant = "primary", ...props }: Props) => (
  <button
    type="button"
    className={cx(
      "flex items-center text-sm gap-x-1 group transition-colors outline-none ",
      {
        "text-gray-500 hover:text-twitter focus-visible:text-twitter": variant === "primary",
        "text-gray-500 hover:text-green-700 focus-visible:text-green-700": variant === "success",
        "text-gray-500 hover:text-red-700 focus-visible:text-red-700": variant === "danger",
        "text-twitter hover:text-slate-800 focus-visible:text-slate-800": variant === "ghost",
      },
      className
    )}
    {...props}
  >
    <Icon
      className={cx("w-10 h-10 p-2 rounded-full transition-colors", {
        "group-hover:bg-twitter/10 group-focus-visible:bg-twitter/10": variant === "primary",
        "group-hover:bg-green-100 group-focus-visible:bg-green-100": variant === "success",
        "group-hover:bg-red-100 group-focus-visible:bg-red-100": variant === "danger",
      })}
      data-testid="icon"
      aria-hidden="true"
    />

    {children && <span>{children}</span>}
  </button>
);

export default IconButton;
