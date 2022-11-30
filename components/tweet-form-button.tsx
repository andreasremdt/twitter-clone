import { SVGProps } from "react";

type Props = {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  onClick?: () => void;
};

const TweetFormButton = ({ Icon, onClick }: Props) => (
  <button
    onClick={onClick}
    type="button"
    className="text-twitter hover:scale-150 focus:scale-150 transition-transform duration-200"
  >
    <Icon className="w-5 h-5" />
  </button>
);

export default TweetFormButton;
