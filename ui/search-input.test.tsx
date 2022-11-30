import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchInput from "@/ui/search-input";

it("renders an input and merges props", () => {
  render(<SearchInput id="search" data-testid="search-test" />);

  expect(screen.getByRole("searchbox")).toBeInTheDocument();
  expect(screen.getByTestId("search-test")).toHaveAttribute("id", "search");
  expect(screen.getByTestId("icon")).toHaveAttribute("aria-hidden", "true");
});

it("events are handled properly", async () => {
  const spy = jest.fn();
  const user = userEvent.setup();

  render(<SearchInput onChange={spy} />);

  await user.type(screen.getByRole("searchbox"), "hello world");

  expect(spy).toHaveBeenCalledTimes(11);
});
