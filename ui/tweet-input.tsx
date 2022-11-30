import { useEffect, useState } from "react";

import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Props = {
  Controls?: ReactNode;
} & ComponentPropsWithoutRef<"textarea">;

const TweetInput = ({ Controls, onChange, ...props }: Props) => {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="grow-wrap grid relative" data-replicated-value={value} data-testid="grow-wrap">
        <textarea
          {...props}
          placeholder="What's happening?"
          maxLength={255}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            onChange?.(event);
          }}
          className="w-full bg-white rounded-md resize-none overflow-hidden focus-visible:border-twitter max-h-48 px-4 pt-2 border border-white outline-none transition-colors"
        />
        {Controls && (
          <div className="absolute bottom-1 left-px right-px flex py-1 px-4 bg-white rounded-b-md">{Controls}</div>
        )}
      </div>
    </>
  );
};

export default TweetInput;
