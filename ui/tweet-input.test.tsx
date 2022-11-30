import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TweetInput from "@/ui/tweet-input";

it("renders the textarea", () => {
  render(<TweetInput id="input" data-testid="tweet-input" />);

  expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "What's happening?");
  expect(screen.getByTestId("tweet-input")).toHaveAttribute("id", "input");
});

it("replicates the input value to grow the textarea", async () => {
  const user = userEvent.setup();

  render(<TweetInput />);

  await user.type(screen.getByRole("textbox"), "hello, world");

  expect(screen.getByTestId("grow-wrap")).toHaveAttribute("data-replicated-value", "hello, world");
});

it("events are handled properly", async () => {
  const spy = jest.fn();
  const user = userEvent.setup();

  render(<TweetInput onChange={spy} />);

  await user.type(screen.getByRole("textbox"), "hello world");

  expect(spy).toHaveBeenCalledTimes(11);
});
