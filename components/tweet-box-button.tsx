import { SVGProps } from "react";

type Props = {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  text?: string | number;
};

const TweetBoxButton = ({ Icon, text }: Props) => (
  <button type="button" className="text-gray-500 flex items-center space-x-2">
    <Icon className="w-5 h-5" />
    {text && <span>{text}</span>}
  </button>
);

export default TweetBoxButton;
