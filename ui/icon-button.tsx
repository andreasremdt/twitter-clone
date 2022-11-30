import cx from "classnames";

import type { SVGProps, ComponentPropsWithoutRef } from "react";

type Props = {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  color?: "blue" | "green" | "red";
} & ComponentPropsWithoutRef<"button">;

const IconButton = ({ Icon, children, color = "blue", ...props }: Props) => (
  <button
    type="button"
    className={cx("text-gray-500 flex items-center text-sm space-x-1 group transition-colors outline-none ", {
      "hover:text-twitter focus-visible:text-twitter": color === "blue",
      "hover:text-green-700 focus-visible:text-green-700": color === "green",
      "hover:text-red-700 focus-visible:text-red-700": color === "red",
    })}
    {...props}
  >
    <Icon
      className={cx("w-9 h-9 p-2 rounded-full transition-colors", {
        "group-hover:bg-twitter/10 group-focus-visible:bg-twitter/10": color === "blue",
        "group-hover:bg-green-100 group-focus-visible:bg-green-100": color === "green",
        "group-hover:bg-red-100 group-focus-visible:bg-red-100": color === "red",
      })}
      data-testid="icon"
      aria-hidden="true"
      strokeWidth={2}
    />

    {children && <span>{children}</span>}
  </button>
);

export default IconButton;
