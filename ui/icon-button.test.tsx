import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserIcon } from "@heroicons/react/24/outline";

import IconButton from "@/ui/icon-button";

it("renders a button with an icon and no text", () => {
  render(<IconButton Icon={UserIcon} />);

  expect(screen.getByRole("button")).toBeInTheDocument();
  expect(screen.getByTestId("icon")).toBeInTheDocument();
  expect(screen.getByTestId("icon")).toHaveAttribute("aria-hidden", "true");
});

it("displays text next to the icon", () => {
  render(<IconButton Icon={UserIcon}>23</IconButton>);

  expect(screen.getByRole("button")).toHaveTextContent(/23/i);
});

it("click handlers are called correctly", async () => {
  const spy = jest.fn();
  const user = userEvent.setup();

  render(<IconButton Icon={UserIcon} onClick={spy} />);

  await user.click(screen.getByRole("button"));
  expect(spy).toHaveBeenCalled();
});

it("different variants render different colors", () => {
  const { rerender } = render(<IconButton Icon={UserIcon} />);

  expect(screen.getByRole("button")).toHaveClass("hover:text-twitter");
  rerender(<IconButton Icon={UserIcon} color="green" />);
  expect(screen.getByRole("button")).toHaveClass("hover:text-green-700");
  rerender(<IconButton Icon={UserIcon} color="red" />);
  expect(screen.getByRole("button")).toHaveClass("hover:text-red-700");
});
