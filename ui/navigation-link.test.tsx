import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserIcon } from "@heroicons/react/24/outline";

import NavigationLink from "@/ui/navigation-link";

it("renders a link with the given text", () => {
  render(
    <NavigationLink href="/" Icon={UserIcon}>
      Profile
    </NavigationLink>
  );

  expect(screen.getByRole("link")).toHaveTextContent(/profile/i);
});

it("renders an icon", () => {
  render(
    <NavigationLink href="/" Icon={UserIcon}>
      Profile
    </NavigationLink>
  );

  expect(screen.getByTestId("icon")).toBeInTheDocument();
  expect(screen.getByTestId("icon")).toHaveAttribute("aria-hidden", "true");
});

it("events are handled properly", async () => {
  const spy = jest.fn();
  const user = userEvent.setup();

  render(
    <NavigationLink href="/" Icon={UserIcon} onClick={spy}>
      Profile
    </NavigationLink>
  );

  await user.click(screen.getByRole("link"));

  expect(spy).toHaveBeenCalled();
});
