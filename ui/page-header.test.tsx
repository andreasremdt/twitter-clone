import { render, screen } from "@testing-library/react";

import PageHeader from "@/ui/page-header";

it("renders a title", () => {
  render(<PageHeader title="Home" />);

  expect(screen.getByRole("heading")).toHaveTextContent(/home/i);
});

it("renders an action control", () => {
  render(<PageHeader title="Home" Control={<button>click me</button>} />);

  expect(screen.getByRole("button")).toHaveTextContent(/click me/i);
});
