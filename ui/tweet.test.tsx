import { render, screen } from "@testing-library/react";

import Tweet from "@/ui/tweet";

import type { Tweet as TweetType } from "@/lib/types";

const tweetFactory = (tweet?: Partial<TweetType>): TweetType => {
  return {
    text: "Example tweet content",
    username: "John Doe",
    _createdAt: new Date().toISOString(),
    _id: "JNrvo7LIKdqGX7eiLmosAI",
    _type: "tweet",
    _updatedAt: new Date().toISOString(),
    _rev: "mO4iUSsmI97FbWpGiRkeO2",
    profileImage: "https://via.placeholder.com/150",
    blockTweet: false,
    ...tweet,
  };
};

it("renders a tweet with all required information", () => {
  render(<Tweet tweet={tweetFactory()} />);

  expect(screen.getByRole("link")).toHaveTextContent(/john doe/i);
  expect(screen.getByText(/@johndoe/i)).toBeInTheDocument();
  expect(screen.getByText(/example tweet content/i)).toBeInTheDocument();
  expect(screen.getByText(/now/i)).toBeInTheDocument();
  expect(screen.queryByRole("button")).not.toBeInTheDocument();
  expect(screen.queryByTestId("tweet-image")).not.toBeInTheDocument();
  expect(screen.queryByRole("img")).toHaveAttribute("alt", "Profile picture of John Doe");
});

it("conditionally renders the tweet image", () => {
  render(<Tweet tweet={tweetFactory({ image: "https://via.placeholder.com/400x400" })} />);

  expect(screen.getByTestId("tweet-image")).toHaveAttribute("src", expect.stringContaining("via.placeholder.com"));
});

it("displays a proper time stamp", () => {
  render(<Tweet tweet={tweetFactory({ _createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString() })} />);

  expect(screen.getByText(/1 hour ago/i)).toBeInTheDocument();
});

it("renders tweet controls", () => {
  render(<Tweet tweet={tweetFactory()} Controls={<button>click me</button>} />);

  expect(screen.getByRole("button")).toHaveTextContent(/click me/i);
});
